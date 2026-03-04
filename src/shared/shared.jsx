
export const themes = {
  dark: {
    bg:           "#0D0D0D",
    surface:      "#131313",
    surface2:     "#1A1A1A",
    surface3:     "#212121",
    border:       "#272727",
    text:         "#F0F0F0",
    textSub:      "#7A7A7A",
    textMuted:    "#444444",
    teal:         "#0CC8A8",
    tealBg:       "rgba(12,200,168,0.10)",
    tealBorder:   "rgba(12,200,168,0.25)",
    sidebar:      "#0F0F0F",
    sidebarActive:"rgba(12,200,168,0.13)",
    consoleBg:    "#0A0A0A",
    shadow:       "0 4px 24px rgba(0,0,0,0.6)",
  },
  light: {
    bg:           "#F2F4F3",
    surface:      "#FFFFFF",
    surface2:     "#F7F8F7",
    surface3:     "#EBEBEB",
    border:       "#E2E2E2",
    text:         "#111111",
    textSub:      "#666666",
    textMuted:    "#AAAAAA",
    teal:         "#0CC8A8",
    tealBg:       "rgba(12,200,168,0.07)",
    tealBorder:   "rgba(12,200,168,0.3)",
    sidebar:      "#FFFFFF",
    sidebarActive:"rgba(12,200,168,0.09)",
    consoleBg:    "#F5F5F5",
    shadow:       "0 4px 24px rgba(0,0,0,0.08)",
  },
};

export const severityColors = {
  Critical: { bg:"#EF4444", text:"#fff", faint:"rgba(239,68,68,0.14)", border:"rgba(239,68,68,0.35)" },
  High:     { bg:"#F97316", text:"#fff", faint:"rgba(249,115,22,0.14)", border:"rgba(249,115,22,0.35)" },
  Medium:   { bg:"#EAB308", text:"#fff", faint:"rgba(234,179,8,0.14)",  border:"rgba(234,179,8,0.35)"  },
  Low:      { bg:"#22C55E", text:"#fff", faint:"rgba(34,197,94,0.14)",  border:"rgba(34,197,94,0.35)"  },
};

export const statusColors = {
  Completed: { bg:"rgba(34,197,94,0.13)",  text:"#22C55E", border:"rgba(34,197,94,0.3)"  },
  Scheduled: { bg:"rgba(120,120,120,0.13)", text:"#999",    border:"rgba(120,120,120,0.3)" },
  Failed:    { bg:"rgba(239,68,68,0.13)",  text:"#EF4444", border:"rgba(239,68,68,0.3)"  },
};

// ─── MOCK DATA ─────────────────────────────────────────────────────────────────
export const SCANS = [
  { id:1,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:2,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:3,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:4,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:5,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:6,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:7,  name:"Web App Servers", type:"Greybox",  status:"Completed", progress:100, vuln:[5,12,23,18], lastScan:"4d ago" },
  { id:8,  name:"Web App Servers", type:"Greybox",  status:"Scheduled", progress:100, vuln:[5,12],       lastScan:"4d ago" },
  { id:9,  name:"Web App Servers", type:"Greybox",  status:"Scheduled", progress:100, vuln:[5,12],       lastScan:"4d ago" },
  { id:10, name:"IoT Devices",     type:"Blackbox", status:"Failed",    progress:10,  vuln:[2,4,8,1],    lastScan:"3d ago" },
  { id:11, name:"Temp Data",       type:"Blackbox", status:"Failed",    progress:10,  vuln:[2,4,8,1],    lastScan:"3d ago" },
];

export const LOG_ENTRIES = [
  {
    time:"09:00:00",
    segments:[
      {type:"normal", text:"I'll begin a systematic penetration test on "},
      {type:"url",    text:"helpdesk.democorp.com"},
      {type:"normal", text:". Let me start with reconnaissance and enumeration."},
    ],
  },
  {
    time:"09:01:00",
    segments:[
      {type:"normal", text:"Good! target is online. Now let me perform port scanning to identify running services."},
    ],
  },
  {
    time:"09:02:00",
    segments:[
      {type:"normal", text:"Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure."},
    ],
  },
  {
    time:"09:03:00",
    segments:[
      {type:"normal", text:"Great! I found a login page for a Help Desk Platform. I can see a useful comment: "},
      {type:"string", text:'"TODO: Delete the testing account (test:test)"'},
      {type:"normal", text:". Let me test this credential. The login redirects to "},
      {type:"path",   text:"/password/test"},
      {type:"normal", text:". Let me follow that path and explore it."},
    ],
  },
  {
    time:"09:04:00",
    segments:[
      {type:"normal", text:"The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to "},
      {type:"string", text:"'#'"},
      {type:"normal", text:" which means the current page. Let me try a different approach."},
    ],
  },
  {
    time:"09:05:00",
    segments:[
      {type:"normal", text:"It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the "},
      {type:"url",    text:"test:test"},
      {type:"normal", text:" password directly on other endpoints."},
    ],
  },
  {
    time:"09:06:00",
    segments:[
      {type:"normal",  text:"Great! I can access the dashboard using the "},
      {type:"header",  text:"'X-UserId: 10032'"},
      {type:"normal",  text:' header. The dashboard shows "Welcome, John Doe". This suggests an '},
      {type:"bold",    text:"**IDOR vulnerability**"},
      {type:"normal",  text:" - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..."},
    ],
  },
];

export const FINDINGS = [
  {
    severity:"Critical",
    time:"10:45:23",
    title:"SQL Injection in Authentication Endpoint",
    endpoint:"/api/users/profile",
    desc:"Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    severity:"High",
    time:"10:45:23",
    title:"Unauthorized Access to User Metadata",
    endpoint:"/api/auth/login",
    desc:"Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    severity:"Medium",
    time:"10:45:23",
    title:"Broken Authentication Rate Limiting",
    endpoint:"/api/search",
    desc:"No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];

// ─── TOAST ─────────────────────────────────────────────────────────────────────
import { useEffect } from "react";

export function Toast({ message, onClose, t }) {
  useEffect(() => {
    const id = setTimeout(onClose, 3000);
    return () => clearTimeout(id);
  }, []);
  return (
    <div style={{
      position:"fixed", bottom:24, right:24, zIndex:9999,
      background: t.teal, color:"#fff",
      padding:"12px 20px", borderRadius:10,
      fontFamily:"'IBM Plex Mono', monospace", fontSize:13,
      boxShadow:"0 8px 32px rgba(12,200,168,0.35)",
      display:"flex", alignItems:"center", gap:10,
      animation:"toastIn 0.3s ease",
    }}>
      <span>✓</span>{message}
    </div>
  );
}

// ─── SEVERITY BADGE ────────────────────────────────────────────────────────────
export function SeverityBadge({ level }) {
  const c = severityColors[level] || severityColors.Low;
  return (
    <span style={{
      padding:"3px 10px", borderRadius:20,
      fontSize:11, fontWeight:700, letterSpacing:"0.03em",
      background: c.bg, color: c.text,
    }}>{level}</span>
  );
}

// ─── STATUS CHIP ───────────────────────────────────────────────────────────────
export function StatusChip({ status }) {
  const c = statusColors[status] || statusColors.Scheduled;
  return (
    <span style={{
      padding:"4px 12px", borderRadius:6,
      fontSize:12, fontWeight:600,
      background: c.bg, color: c.text,
      border:`1px solid ${c.border}`,
    }}>{status}</span>
  );
}

// ─── VULN BADGES ──────────────────────────────────────────────────────────────
export function VulnBadges({ counts }) {
  const colors = [severityColors.Critical.bg, severityColors.High.bg, severityColors.Medium.bg, severityColors.Low.bg];
  return (
    <div style={{ display:"flex", gap:4 }}>
      {counts.map((v, i) => (
        <span key={i} style={{
          padding:"2px 7px", borderRadius:5,
          fontSize:12, fontWeight:700,
          background: colors[i], color:"#fff",
        }}>{v}</span>
      ))}
    </div>
  );
}

// ─── GLOBAL STYLES ─────────────────────────────────────────────────────────────
export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'IBM Plex Mono', monospace; }
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
    @keyframes toastIn { from { transform:translateX(40px); opacity:0; } to { transform:translateX(0); opacity:1; } }
    @keyframes fadeUp  { from { transform:translateY(12px); opacity:0; } to { transform:translateY(0); opacity:1; } }
    .aps-row-hover:hover { background: var(--row-hover) !important; }
  `}</style>
);
