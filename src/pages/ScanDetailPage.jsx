// ─── ScanDetailPage.jsx

import { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import {
  GlobalStyles,
  Toast,
  SeverityBadge,
  LOG_ENTRIES,
  FINDINGS,
  themes,
} from "../shared/shared.jsx";

const STEPS = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];

export default function ScanDetailPage({
  isDark,
  setIsDark,
  setScreen,
}) {
  const t = isDark ? themes.dark : themes.light;

  const [activeTab, setActiveTab] = useState("Activity Log");
  const [toast, setToast] = useState(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current)
      logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [activeTab]);

  return (
    <>
      <GlobalStyles />

      <div
        style={{
          display: "flex",
          height: "100vh",
          background: t.bg,
          color: t.text,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Sidebar
          t={t}
          isDark={isDark}
          setIsDark={setIsDark}
          setScreen={setScreen}
        />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

          {/* ───────── HEADER ───────── */}
          <div
            style={{
              padding: "20px 32px",
              borderBottom: `1px solid ${t.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: t.surface,
            }}
          >
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600 }}>
                Active Scan — Web App Servers
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: t.textSub,
                  marginTop: 4,
                }}
              >
                Real-time vulnerability detection in progress
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setToast("Report exported")}
                style={outlineBtn(t)}
              >
                Export Report
              </button>
              <button
                onClick={() => setToast("Scan stopped")}
                style={dangerBtn()}
              >
                Stop Scan
              </button>
            </div>
          </div>

          {/* ───────── CONTENT ───────── */}
          <div style={{ padding: 32, overflowY: "auto" }}>

            {/* ───────── PROGRESS CARD ───────── */}
            <div
              style={{
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: 28,
                marginBottom: 28,
              }}
            >
              <div style={{ display: "flex", gap: 40 }}>
                <CircularProgress pct={42} t={t} isDark={isDark} />

                <div style={{ flex: 1 }}>
                  <StepTracker steps={STEPS} activeStep={2} t={t} />

                  <div
                    style={{
                      marginTop: 28,
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(150px,1fr))",
                      gap: 24,
                    }}
                  >
                    {[
                      ["Scan Type", "Greybox"],
                      ["Target", "api.democorp.com"],
                      ["Started At", "Nov 22, 09:00 AM"],
                      ["Credentials", "2 Active"],
                      ["Files", "3 Uploaded"],
                      ["Checklist", "118 / 350"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p
                          style={{
                            fontSize: 12,
                            color: t.textSub,
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            fontWeight: 600,
                            marginTop: 6,
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ───────── GRID ───────── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 0.7fr",
                gap: 24,
              }}
            >
              {/* CONSOLE */}
              <div
                style={{
                  background: t.surface,
                  borderRadius: 14,
                  border: `1px solid ${t.border}`,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: 16,
                    borderBottom: `1px solid ${t.border}`,
                    fontWeight: 600,
                  }}
                >
                  Live Scan Console
                </div>

                <div
                  ref={logRef}
                  style={{
                    flex: 1,
                    padding: 18,
                    overflowY: "auto",
                    background: t.consoleBg,
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {LOG_ENTRIES.map((entry, i) => (
                    <LogLine
                      key={i}
                      entry={entry}
                      t={t}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>

              {/* FINDINGS */}
              <div
                style={{
                  background: t.surface,
                  borderRadius: 14,
                  border: `1px solid ${t.border}`,
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 600 }}>
                  Findings
                </h3>

                {FINDINGS.map((f, i) => (
                  <FindingCard
                    key={i}
                    finding={f}
                    t={t}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>

          {toast && (
            <Toast
              message={toast}
              onClose={() => setToast(null)}
              t={t}
            />
          )}
        </div>
      </div>
    </>
  );
}

/* ───────── COMPONENTS ───────── */

function CircularProgress({ pct, t, isDark }) {
  const R = 44;
  const C = 2 * Math.PI * R;

  return (
    <div style={{ position: "relative", width: 110 }}>
      <svg width="110" height="110" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="55"
          cy="55"
          r={R}
          stroke={isDark ? "#222" : "#E5E7EB"}
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="55"
          cy="55"
          r={R}
          stroke={t.teal}
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${(C * pct) / 100} ${C}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.6s ease" }}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 700 }}>
          {pct}%
        </span>
        <span
          style={{
            fontSize: 11,
            color: t.textSub,
            marginTop: 4,
          }}
        >
          In Progress
        </span>
      </div>
    </div>
  );
}

function StepTracker({ steps, activeStep, t }) {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      {steps.map((step, i) => (
        <div
          key={step}
          style={{
            color: i === activeStep ? t.teal : t.textSub,
            fontWeight: i === activeStep ? 600 : 400,
            fontSize: 13,
          }}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

function LogLine({ entry, t, isDark }) {
  const colors = {
    normal: isDark ? "#CCCCCC" : "#444",
    url: t.teal,
    string: "#F97316",
    path: isDark ? "#FFFFFF" : "#111",
    header: "#0CC8A8",
    bold: "#EF4444",
  };

  return (
    <div style={{ marginBottom: 14 }}>
      <span style={{ color: t.teal }}>[{entry.time}] </span>

      {entry.segments.map((seg, i) => (
        <span
          key={i}
          style={{
            color: colors[seg.type] || colors.normal,
            fontWeight: seg.type === "bold" ? 700 : 400,
          }}
        >
          {seg.type === "bold"
            ? seg.text.replace(/\*\*/g, "")
            : seg.text}
        </span>
      ))}
    </div>
  );
}

function FindingCard({ finding, t, isDark }) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        border: `1px solid ${t.border}`,
        background: t.surface2,
        boxShadow: isDark
          ? "0 4px 20px rgba(0,0,0,0.5)"
          : "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <SeverityBadge level={finding.severity} />
        <span style={{ fontSize: 11, color: t.textSub }}>
          {finding.time}
        </span>
      </div>

      <div
        style={{
          fontWeight: 600,
          marginBottom: 6,
        }}
      >
        {finding.title}
      </div>

      <div
        style={{
          color: t.teal,
          fontSize: 13,
          marginBottom: 6,
        }}
      >
        {finding.endpoint}
      </div>

      <div style={{ fontSize: 13, color: t.textSub }}>
        {finding.desc}
      </div>
    </div>
  );
}

const outlineBtn = (t) => ({
  padding: "8px 16px",
  borderRadius: 8,
  border: `1px solid ${t.border}`,
  background: "transparent",
  cursor: "pointer",
});

const dangerBtn = () => ({
  padding: "8px 16px",
  borderRadius: 8,
  border: "1px solid rgba(239,68,68,0.4)",
  background: "transparent",
  color: "#EF4444",
  cursor: "pointer",
});