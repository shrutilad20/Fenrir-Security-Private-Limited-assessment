// ─── DashboardPage.jsx (New Layout Version) ─────────────────────────

import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import {
  GlobalStyles,
  Toast,
  StatusChip,
  VulnBadges,
  SCANS,
  themes,
} from "../shared/shared.jsx";

export default function DashboardPage({
  isDark,
  setIsDark,
  setScreen,
}) {
  const t = isDark ? themes.dark : themes.light;

  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);

  const filtered = SCANS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase())
  );

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

          {/* HEADER */}
          <header
            style={{
              padding: "24px 32px",
              borderBottom: `1px solid ${t.border}`,
              background: t.surface,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 600 }}>
                Security Overview
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: t.textSub,
                  marginTop: 4,
                }}
              >
                Organization-level scan insights
              </p>
            </div>

            <button
              onClick={() => setToast("New scan started")}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                background: t.teal,
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              + New Scan
            </button>
          </header>

          <div style={{ padding: 32, overflowY: "auto" }}>

            {/* ORG SUMMARY BAR */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 28,
                background: t.surface,
                padding: 18,
                borderRadius: 12,
                border: `1px solid ${t.border}`,
              }}
            >
              <div style={{ display: "flex", gap: 40 }}>
                <SummaryItem label="Organization" value="Project X" />
                <SummaryItem label="Total Scans" value="128" />
                <SummaryItem label="Active Scans" value="5" />
              </div>

              <div style={{ color: t.teal, fontSize: 13 }}>
                ● Live Monitoring Active
              </div>
            </div>

            {/* SEVERITY CARDS (COMPACT) */}
            <div
              style={{
                display: "flex",
                gap: 16,
                marginBottom: 32,
              }}
            >
              {[
                { label: "Critical", count: 12, color: "#EF4444" },
                { label: "High", count: 24, color: "#F97316" },
                { label: "Medium", count: 38, color: "#FACC15" },
                { label: "Low", count: 56, color: "#22C55E" },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{
                    flex: 1,
                    padding: 18,
                    borderRadius: 12,
                    background: t.surface,
                    border: `1px solid ${t.border}`,
                  }}
                >
                  <p style={{ fontSize: 12, color: t.textSub }}>
                    {card.label}
                  </p>
                  <h2
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      marginTop: 6,
                      color: card.color,
                    }}
                  >
                    {card.count}
                  </h2>
                </div>
              ))}
            </div>

            {/* MAIN GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: 24,
              }}
            >
              {/* LEFT: TABLE */}
              <div
                style={{
                  background: t.surface,
                  borderRadius: 14,
                  border: `1px solid ${t.border}`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: 16,
                    borderBottom: `1px solid ${t.border}`,
                  }}
                >
                  <input
                    placeholder="Search scans..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: `1px solid ${t.border}`,
                      background: t.surface2,
                      color: t.text,
                    }}
                  />
                </div>

                <div>
                  {filtered.map((scan) => (
                    <ScanRow
                      key={scan.id}
                      scan={scan}
                      t={t}
                      onClick={() =>
                        setScreen("scan-detail")
                      }
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: INSIGHTS PANEL */}
              <div
                style={{
                  background: t.surface,
                  borderRadius: 14,
                  border: `1px solid ${t.border}`,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  Insights
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: t.textSub,
                    lineHeight: 1.6,
                  }}
                >
                  • Critical findings increased by 8% this week  
                  • 3 failed scans require immediate review  
                  • Most vulnerabilities detected in API endpoints  
                </p>
              </div>
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
    </>
  );
}

/* COMPONENTS */

function ScanRow({ scan, t, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "16px 20px",
        borderBottom: `1px solid ${t.border}`,
        cursor: "pointer",
      }}
    >
      <div style={{ fontWeight: 500 }}>
        {scan.name}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
          fontSize: 12,
          color: t.textSub,
        }}
      >
        <span>{scan.type}</span>
        <StatusChip status={scan.status} />
      </div>
      <div style={{ marginTop: 8 }}>
        <VulnBadges counts={scan.vuln} />
      </div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: 12, opacity: 0.6 }}>
        {label}
      </p>
      <p style={{ fontWeight: 600, marginTop: 4 }}>
        {value}
      </p>
    </div>
  );
}