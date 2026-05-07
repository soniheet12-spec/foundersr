.root { display: flex; min-height: 100vh; }

.sidebar {
  width: 200px;
  min-height: 100vh;
  background: var(--bg2);
  border-right: 0.5px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  position: fixed;
  top: 0; left: 0; bottom: 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 2rem;
  font-style: italic;
}

.brandDot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; flex-shrink: 0; }

.nav { display: flex; flex-direction: column; gap: 2px; flex: 1; }

.navItem {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: none;
  background: none;
  color: var(--text2);
  font-family: var(--font-mono);
  font-size: 12px;
  cursor: pointer;
  border-radius: var(--radius);
  text-align: left;
  transition: color 0.15s, background 0.15s;
}
.navItem:hover { color: var(--text); background: var(--bg3); }
.navActive { color: var(--text) !important; background: var(--bg3) !important; }
.navActive .navIcon { color: var(--accent); }
.navIcon { font-size: 10px; }

.sidebarStats { border-top: 0.5px solid var(--border); padding-top: 1rem; display: flex; flex-direction: column; gap: 12px; }
.sidebarStat { display: flex; flex-direction: column; gap: 2px; }
.sidebarStatVal { font-size: 20px; font-family: var(--font-display); font-weight: 300; color: var(--text); }
.sidebarStatLbl { font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.08em; }

.sidebarFoot {
  font-size: 10px;
  color: var(--text3);
  margin-top: 1rem;
  font-style: italic;
  font-family: var(--font-display);
}

.main { margin-left: 200px; flex: 1; padding: 2.5rem 2rem; max-width: 860px; }
.panel { max-width: 680px; }

.panelHeader { margin-bottom: 2rem; }
.headerRow { display: flex; justify-content: space-between; align-items: flex-end; gap: 1rem; }
.panelHeader h1 { font-family: var(--font-display); font-size: 28px; font-weight: 300; font-style: italic; color: var(--text); margin-bottom: 4px; }
.panelHeader p { color: var(--text2); font-size: 12px; }

.filterGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 1.5rem; }
.field { display: flex; flex-direction: column; gap: 5px; }
.field label { font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.08em; }
.field select, .field input {
  background: var(--bg2);
  border: 0.5px solid var(--border2);
  border-radius: var(--radius);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 8px 10px;
  outline: none;
  transition: border-color 0.15s;
}
.field select:focus, .field input:focus { border-color: var(--accent); }

.btnPrimary {
  background: var(--accent);
  color: #0d0d0d;
  border: none;
  border-radius: var(--radius);
  padding: 10px 20px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;
  white-space: nowrap;
}
.btnPrimary:hover { background: var(--accent2); }
.btnPrimary:disabled { opacity: 0.4; cursor: not-allowed; }

.btnSecondary {
  background: none;
  color: var(--text2);
  border: 0.5px solid var(--border2);
  border-radius: var(--radius);
  padding: 9px 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.btnSecondary:hover { color: var(--text); border-color: var(--text2); }
.btnSecondary:disabled { opacity: 0.4; cursor: not-allowed; }

.logBox { margin-top: 1.5rem; background: var(--bg2); border: 0.5px solid var(--border); border-radius: var(--radius); padding: 12px 14px; }
.logLine { font-size: 11px; color: var(--text2); line-height: 2; }
.logLine:last-child { color: var(--accent); }

.leadCard { background: var(--bg2); border: 0.5px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 12px; transition: border-color 0.2s; }
.leadCard:hover { border-color: var(--border2); }

.leadTop { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
.leadName { font-size: 14px; font-weight: 500; color: var(--text); }
.leadCompany { font-size: 11px; color: var(--text2); margin-top: 2px; }

.fitScore { font-family: var(--font-display); font-size: 22px; font-weight: 300; font-style: italic; flex-shrink: 0; }
.fitScore span { font-size: 12px; }
.scoreHigh { color: var(--accent); }
.scoreMid { color: var(--amber); }
.scoreLow { color: var(--text2); }

.scoreBar { height: 2px; background: var(--bg3); border-radius: 1px; margin-bottom: 12px; }
.scoreBarFill { height: 100%; background: var(--accent); border-radius: 1px; transition: width 0.6s ease; }

.tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.tag { font-size: 10px; padding: 3px 8px; border-radius: 20px; border: 0.5px solid var(--border2); color: var(--text2); background: var(--bg3); }

.traction { font-size: 12px; color: var(--text); margin-bottom: 4px; }
.fitReason { font-size: 11px; color: var(--text2); margin-bottom: 12px; }

.contactRow { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
.contactField { display: flex; flex-direction: column; gap: 4px; }
.contactField label { font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.08em; }
.contactField input {
  background: var(--bg3);
  border: 0.5px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 7px 9px;
  outline: none;
}
.contactField input:focus { border-color: var(--accent); }

.emailDraft {
  width: 100%;
  background: var(--bg3);
  border: 0.5px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.7;
  padding: 12px;
  resize: vertical;
  outline: none;
  margin-bottom: 12px;
}
.emailDraft:focus { border-color: var(--accent); }

.draftLoading { font-size: 11px; color: var(--text3); margin-bottom: 12px; animation: pulse 1.2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

.leadActions { display: flex; gap: 8px; flex-wrap: wrap; }

.emptyState { text-align: center; padding: 3rem 1rem; color: var(--text3); font-size: 12px; }

@media (max-width: 720px) {
  .sidebar { position: static; width: 100%; min-height: auto; flex-direction: row; align-items: center; padding: 1rem; gap: 1rem; }
  .nav { flex-direction: row; }
  .sidebarStats { flex-direction: row; border: none; padding: 0; margin-left: auto; }
  .sidebarFoot { display: none; }
  .main { margin-left: 0; padding: 1.5rem 1rem; }
  .filterGrid { grid-template-columns: 1fr; }
  .contactRow { grid-template-columns: 1fr; }
}
