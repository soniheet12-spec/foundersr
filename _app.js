import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { lead, valueProp } = req.body

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 400,
      system: 'You write short, warm, peer-to-peer cold outreach emails. No filler. No subject line. Just the body.',
      messages: [{
        role: 'user',
        content: `Write a 4-5 line cold email (different angle from before):
Founder: ${lead.name}, ${lead.company}
Sector: ${lead.sector}, Stage: ${lead.stage}
Traction: ${lead.traction}
Raising: ${lead.roundSize}
Our value prop: ${valueProp}

Reference their specific traction. Warm, not salesy. No subject line, no sign-off placeholder.`
      }]
    })
    const draft = response.content.filter(b => b.type === 'text').map(b => b.text).join('')
    res.json({ draft })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
