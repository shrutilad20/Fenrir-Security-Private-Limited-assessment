
import { themes } from "../shared/shared.jsx";
const NAV_ITEMS = [
  { icon: <DashIcon />,  label:"Dashboard",     key:"dashboard" },
  { icon: <ProjIcon />,  label:"Projects",      key:"projects"  },
  { icon: <ScanIcon />,  label:"Scans",         key:"scans"     },
  { icon: <SchedIcon />, label:"Schedule",      key:"schedule"  },
  null, // divider
  { icon: <BellIcon />,  label:"Notifications", key:"notifications" },
  { icon: <GearIcon />,  label:"Settings",      key:"settings"  },
  { icon: <HelpIcon />,  label:"Support",       key:"support"   },
];

export default function Sidebar({ t, isDark, setIsDark, activeNav, setActiveNav, setScreen, mobile, onClose }) {
  const handleNav = (key) => {
    setActiveNav(key);
    if (key === "dashboard") setScreen("dashboard");
    if (key === "scans")     setScreen("scan-detail");
    if (mobile) onClose?.();
  };

  return (
    <aside style={{
      width: 220,
      minWidth: 220,
      height: "100vh",
      background: t.sidebar,
      borderRight: `1px solid ${t.border}`,
      display: "flex",
      flexDirection: "column",
      fontFamily: "'IBM Plex Mono', monospace",
      ...(mobile ? {
        position:"fixed", top:0, left:0, zIndex:300,
        boxShadow:"4px 0 40px rgba(0,0,0,0.5)",
      } : {}),
    }}>
      {/* Logo row */}
      <div style={{
        padding:"20px 18px 16px",
        borderBottom:`1px solid ${t.border}`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{
            width:32, height:32, borderRadius:"50%",
            background:"linear-gradient(135deg, #0CC8A8 0%, #0A9A82 100%)",
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"#fff", fontWeight:800, fontSize:14,
          }}>a</div>
          <span style={{ color:t.text, fontSize:17, fontWeight:700, letterSpacing:"-0.02em" }}>aps</span>
        </div>
        {mobile && (
          <button onClick={onClose} style={{ background:"none", border:"none", color:t.textSub, fontSize:18, cursor:"pointer" }}>✕</button>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex:1, padding:"10px 10px 0", overflowY:"auto" }}>
        {NAV_ITEMS.map((item, i) => {
          if (!item) return <div key={i} style={{ height:1, background:t.border, margin:"8px 0" }} />;
          const isActive = activeNav === item.key;
          return (
            <button key={item.key} onClick={() => handleNav(item.key)} style={{
              width:"100%", display:"flex", alignItems:"center", gap:11,
              padding:"10px 12px", borderRadius:8, border:"none",
              background: isActive ? t.sidebarActive : "transparent",
              color: isActive ? t.teal : t.textSub,
              cursor:"pointer", fontSize:13.5, fontFamily:"'IBM Plex Mono', monospace",
              textAlign:"left", marginBottom:2,
              transition:"background 0.15s, color 0.15s",
            }}>
              <span style={{ width:18, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Theme toggle */}
      <div style={{ padding:"12px 12px", borderTop:`1px solid ${t.border}` }}>
        <button onClick={() => setIsDark(!isDark)} style={{
          width:"100%", padding:"9px 14px", borderRadius:8,
          background: t.surface3, border:`1px solid ${t.border}`,
          color:t.textSub, cursor:"pointer", fontSize:12,
          fontFamily:"'IBM Plex Mono', monospace",
          display:"flex", alignItems:"center", gap:8,
          transition:"all 0.2s",
        }}>
          <span style={{ fontSize:14 }}>{isDark ? "☀" : "☾"}</span>
          {isDark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      {/* User */}
      <div style={{
        padding:"14px 14px",
        borderTop:`1px solid ${t.border}`,
        display:"flex", alignItems:"center", gap:10,
      }}>
        <div style={{
          width:34, height:34, borderRadius:"50%",
          background:"linear-gradient(135deg,#4A4A4A,#2A2A2A)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:16, flexShrink:0,
        }}>👤</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ color:t.text, fontSize:11.5, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>admin@edu.com</div>
          <div style={{ color:t.textSub, fontSize:11 }}>Security Lead</div>
        </div>
        <span style={{ color:t.textSub, fontSize:13 }}>›</span>
      </div>
    </aside>
  );
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function DashIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>; }
function ProjIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function ScanIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 1.5V4M8 12v2.5M1.5 8H4M12 8h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function SchedIcon() { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="2.5" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 1.5V3.5M11 1.5V3.5M1.5 6.5h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function BellIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5v2.5L2 10.5h12l-1.5-2V6A4.5 4.5 0 0 0 8 1.5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 13a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function GearIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function HelpIcon()  { return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 6a1.5 1.5 0 1 1 2 1.4C8 8 8 9 8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="currentColor"/></svg>; }
