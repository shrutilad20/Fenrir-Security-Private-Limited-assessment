// ─── LoginPage.jsx 
import { useState } from "react";

export default function LoginPage({ isDark, setIsDark, setScreen }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = true;
    if (!form.lastName.trim()) e.lastName = true;
    if (!form.email.includes("@")) e.email = true;
    if (form.password.length < 8) e.password = true;
    if (!form.terms) e.terms = true;
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScreen("dashboard");
    }, 900);
  };

  const theme = {
    bg: isDark ? "#0F0F0F" : "#F5F7F6",
    surface: isDark ? "#1A1A1A" : "#FFFFFF",
    border: isDark ? "#272727" : "#E5E7EB",
    text: isDark ? "#FFFFFF" : "#111111",
    sub: isDark ? "#A1A1A1" : "#6B7280",
    input: isDark ? "#161616" : "#FAFAFA",
    teal: "#0CC8A8",
  };

  const inputStyle = (key) => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: `1.5px solid ${
      errors[key] ? "#EF4444" : theme.border
    }`,
    background: theme.input,
    color: theme.text,
    fontSize: 14,
    outline: "none",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: theme.bg,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          flex: 1,
          padding: "80px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: isDark
            ? `
            radial-gradient(60% 80% at 20% 80%, rgba(12,200,168,0.25), transparent 60%),
            radial-gradient(50% 70% at 80% 20%, rgba(255,120,60,0.18), transparent 60%),
            linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)
            `
            : `
            radial-gradient(60% 80% at 20% 80%, rgba(12,200,168,0.15), transparent 60%),
            radial-gradient(50% 70% at 80% 20%, rgba(255,120,60,0.12), transparent 60%),
            linear-gradient(135deg, #F5FFFC 0%, #F5F7F6 100%)
            `,
        }}
      >
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 28,
            color: theme.text,
          }}
        >
          Expert level Cybersecurity <br />
          in <span style={{ color: theme.teal }}>hours</span> not weeks.
        </h1>

        <div style={{ marginBottom: 40 }}>
          {[
            "Automated spidering & target mapping",
            "Validated vulnerability findings",
            "Enterprise-ready security reports",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 14,
                color: theme.sub,
                fontSize: 14,
              }}
            >
              <span style={{ color: theme.teal }}>✓</span>
              {item}
            </div>
          ))}
        </div>

        {/* Trustpilot */}
        <div>
          <div style={{ color: theme.teal, fontSize: 13 }}>
            ★ Trustpilot
          </div>
          <div style={{ fontWeight: 600, marginTop: 6 }}>
            Rated 4.5/5.0{" "}
            <span style={{ opacity: 0.6, fontWeight: 400 }}>
              (100k+ reviews)
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          width: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            width: "100%",
            background: theme.surface,
            borderRadius: 16,
            padding: 40,
            border: `1px solid ${theme.border}`,
            boxShadow: isDark
              ? "0 20px 60px rgba(0,0,0,0.6)"
              : "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ fontSize: 26, fontWeight: 600 }}>
            Create account
          </h2>

          <p style={{ fontSize: 14, color: theme.sub, marginBottom: 28 }}>
            Start your security scan today.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <input
              placeholder="First name"
              style={inputStyle("firstName")}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
            <input
              placeholder="Last name"
              style={inputStyle("lastName")}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>

          <input
            placeholder="Email address"
            style={{ ...inputStyle("email"), marginBottom: 14 }}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div style={{ position: "relative", marginBottom: 18 }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password (8+ characters)"
              style={inputStyle("password")}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              onClick={() => setShowPass(!showPass)}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: theme.sub,
              }}
            >
              {showPass ? "🙈" : "👁"}
            </button>
          </div>

          <label
            style={{
              display: "flex",
              gap: 10,
              fontSize: 13,
              color: theme.sub,
              marginBottom: 24,
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={form.terms}
              onChange={() =>
                setForm({ ...form, terms: !form.terms })
              }
              style={{ accentColor: theme.teal }}
            />
            I agree to the Terms & Privacy Policy
          </label>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 10,
              border: "none",
              background: theme.teal,
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {/* Social Buttons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 24,
            }}
          >
            {["Apple", "Google", "Meta"].map((s) => (
              <button
                key={s}
                style={{
                  flex: 1,
                  height: 44,
                  borderRadius: 10,
                  border: `1px solid ${theme.border}`,
                  background: theme.input,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: theme.surface,
          border: `1px solid ${theme.border}`,
          padding: "8px 14px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}