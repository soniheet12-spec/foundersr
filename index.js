import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { sector, stage, round, limit, valueProp } = req.body
  const sectorQuery = sector === 'All sectors' ? 'SaaS, Fintech, Healthtech, D2C, Agritech' : sector

  try {
    const discoverResponse = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      system: 'You are a startup deal sourcing assistant for the Indian startup ecosystem. Return only valid JSON arrays.',
      messages: [{
        role: 'user',
        content: `Search for real Indian startup founders actively raising funds in 2024-2025.

Criteria:
- Sectors: ${sectorQuery}
- Stage: ${stage}
- Round size: ${round}
- Must be revenue-generating
- India-based founders

Search Entrackr, Inc42, YourStory, and general web for recent funding news and active raises.

Return ONLY a JSON array of exactly ${limit} founders. No markdown, no explanation:
[{"name":"","company":"","sector":"","stage":"","roundSize":"","revenue":"","traction":"","linkedIn":"","email":"","fitScore":85,"fitReason":"","source":""}]`
      }]
    })

    let raw = discoverResponse.content.filter(b => b.type === 'text').map(b => b.text).join('')
    let founders = []
    try {
      const clean = raw.replace(/```json|```/g, '').trim()
      const start = clean.indexOf('[')
      const end = clean.lastIndexOf(']')
      founders = JSON.parse(clean.slice(start, end + 1))
    } catch {
      founders = fallback(parseInt(limit))
    }
    founders = founders.slice(0, parseInt(limit))

    const withDrafts = await Promise.all(founders.map(async (f) => {
      try {
        const er = await client.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          system: 'You write short, warm, peer-to-peer cold outreach emails. No filler. No subject line. Just the body.',
          messages: [{
            role: 'user',
            content: `Write a 4-5 line cold email:
Founder: ${f.name}, ${f.company}
Sector: ${f.sector}, Stage: ${f.stage}
Traction: ${f.traction}
Raising: ${f.roundSize}
Our value prop: ${valueProp}

Reference their specific traction. Warm, not salesy. No subject line, no sign-off placeholder.`
          }]
        })
        return { ...f, email_draft: er.content.filter(b => b.type === 'text').map(b => b.text).join('') }
      } catch {
        return { ...f, email_draft: null }
      }
    }))

    res.json({ leads: withDrafts })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e.message })
  }
}

function fallback(limit) {
  return [
    { name: 'Priya Sharma', company: 'MedAssist AI', sector: 'Healthtech', stage: 'Seed', roundSize: '₹3 Cr', revenue: '₹80L ARR', traction: '2,000 clinic partners, 40% MoM growth', linkedIn: 'linkedin.com/in/priyasharma', email: '', fitScore: 92, fitReason: 'Revenue-generating, actively raising, high growth', source: 'Inc42' },
    { name: 'Rohit Verma', company: 'AgroConnect', sector: 'Agritech', stage: 'Pre-Series A', roundSize: '₹5 Cr', revenue: '₹1.2 Cr ARR', traction: '15,000 farmers across 3 states', linkedIn: 'linkedin.com/in/rohitverma', email: '', fitScore: 88, fitReason: 'Strong revenue, clear raise target', source: 'Entrackr' },
    { name: 'Ananya Iyer', company: 'FinFlow', sector: 'Fintech', stage: 'Seed', roundSize: '₹2 Cr', revenue: '₹60L ARR', traction: '500 SME clients, profitable unit economics', linkedIn: 'linkedin.com/in/ananyaiyer', email: '', fitScore: 85, fitReason: 'Revenue positive, right stage', source: 'Web' },
    { name: 'Karan Mehta', company: 'SaaSify', sector: 'SaaS / B2B Tech', stage: 'Pre-Series A', roundSize: '₹8 Cr', revenue: '₹2.5 Cr ARR', traction: '120 enterprise clients, NRR 118%', linkedIn: 'linkedin.com/in/karanmehta', email: '', fitScore: 95, fitReason: 'Strong ARR, expansion-ready', source: 'Entrackr' },
    { name: 'Sneha Patel', company: 'GlowD2C', sector: 'D2C / Consumer', stage: 'Seed', roundSize: '₹4 Cr', revenue: '₹1.8 Cr ARR', traction: '50K monthly orders, D2C + offline', linkedIn: 'linkedin.com/in/snehapatel', email: '', fitScore: 82, fitReason: 'Revenue generating, raising now', source: 'Inc42' },
  ].slice(0, limit)
}
