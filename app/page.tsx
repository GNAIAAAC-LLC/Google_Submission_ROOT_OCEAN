export default function Home() {
  const sectionStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  } as const;

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "20px",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #061225 0%, #0a1830 45%, #102347 100%)",
        color: "#ffffff",
        fontFamily:
          'Arial, Helvetica, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
    >
      {/* Top Bar */}
      <header
        style={{
          padding: "18px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          backdropFilter: "blur(10px)",
          background: "rgba(6,18,37,0.72)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #FFD700, #E6B800)",
                color: "#081221",
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                boxShadow: "0 8px 22px rgba(255,215,0,0.25)",
              }}
            >
              SS
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800 }}>SSGPT6</div>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>
                Intelligent Digital Access Platform
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {["Home", "Services", "Dashboard", "Pricing", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "60px 20px 30px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(255,215,0,0.12)",
                border: "1px solid rgba(255,215,0,0.22)",
                color: "#FFD700",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              Founder Control Platform
            </div>

            <h1
              style={{
                fontSize: "48px",
                lineHeight: 1.08,
                margin: "0 0 18px",
                fontWeight: 900,
              }}
            >
              Build, monitor, and control your digital platform with{" "}
              <span style={{ color: "#FFD700" }}>SSGPT6</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                opacity: 0.9,
                maxWidth: "720px",
              }}
            >
              A modern platform for deployment visibility, infrastructure
              control, automation planning, and founder-level dashboard access.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#dashboard"
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #FFD700, #E6B800)",
                  color: "#091321",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  boxShadow: "0 12px 26px rgba(255,215,0,0.22)",
                }}
              >
                Open Dashboard
              </a>
              <a
                href="#services"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                View Services
              </a>
            </div>
          </div>

          <div style={sectionStyle}>
            <div
              style={{
                borderRadius: "18px",
                padding: "22px",
                background:
                  "linear-gradient(180deg, rgba(255,215,0,0.10), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,215,0,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#FFD700",
                  fontWeight: 700,
                  marginBottom: "18px",
                }}
              >
                Platform Snapshot
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {[
                  ["System Status", "Active"],
                  ["Core Domain", "ssgpt6.com"],
                  ["Founder Panel", "Ready"],
                  ["Automation Layer", "Planned"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      ...cardStyle,
                      padding: "16px",
                    }}
                  >
                    <div style={{ fontSize: "12px", opacity: 0.75 }}>{label}</div>
                    <div
                      style={{
                        marginTop: "8px",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  ...cardStyle,
                }}
              >
                <div style={{ fontSize: "12px", opacity: 0.75 }}>
                  Current Homepage Status
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "22px",
                    fontWeight: 900,
                    color: "#FFD700",
                  }}
                >
                  Hello world replaced
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "10px",
              fontWeight: 900,
            }}
          >
            Core Services
          </h2>
          <p style={{ opacity: 0.85, fontSize: "17px", marginBottom: "24px" }}>
            A clean starting structure for your real platform.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              {
                title: "Founder Dashboard",
                text: "Central control panel for your platform status and actions.",
              },
              {
                title: "Deployment Monitoring",
                text: "Track website health, hosting state, and deployment readiness.",
              },
              {
                title: "Automation Hub",
                text: "Prepare future AI workflows, recovery systems, and alerts.",
              },
              {
                title: "Business Presence",
                text: "Showcase your brand, services, and customer trust elements.",
              },
            ].map((item) => (
              <div key={item.title} style={cardStyle}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    marginBottom: "10px",
                    color: "#FFD700",
                  }}
                >
                  {item.title}
                </div>
                <div style={{ lineHeight: 1.7, opacity: 0.9 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={sectionStyle}>
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "18px",
                fontWeight: 900,
              }}
            >
              Founder Dashboard Preview
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              {[
                ["Domain Status", "Connected"],
                ["UI Status", "Professional"],
                ["Project Board", "Starter Ready"],
                ["Payment Section", "Coming Soon"],
                ["Login Layer", "Future Setup"],
                ["Support Center", "Ready to Add"],
              ].map(([label, value]) => (
                <div key={label} style={cardStyle}>
                  <div style={{ fontSize: "13px", opacity: 0.75 }}>{label}</div>
                  <div
                    style={{
                      marginTop: "8px",
                      fontSize: "22px",
                      fontWeight: 900,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px",
              fontWeight: 900,
            }}
          >
            Platform Plans
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              {
                name: "Starter",
                price: "$49",
                items: ["Basic homepage", "Contact section", "Clean layout"],
              },
              {
                name: "Professional",
                price: "$149",
                items: ["Dashboard UI", "Services layout", "Stronger brand design"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                items: ["Automation planning", "Multi-page build", "Founder system setup"],
              },
            ].map((plan) => (
              <div key={plan.name} style={cardStyle}>
                <div style={{ fontSize: "24px", fontWeight: 900 }}>{plan.name}</div>
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: 900,
                    color: "#FFD700",
                    margin: "10px 0 14px",
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ lineHeight: 1.9, opacity: 0.9 }}>
                  {plan.items.map((item) => (
                    <div key={item}>• {item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "24px 20px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={sectionStyle}>
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "10px",
                fontWeight: 900,
              }}
            >
              Contact & Next Step
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, opacity: 0.9 }}>
              Your site is no longer showing the default placeholder. This is now
              a real branded homepage starter for SSGPT6.
            </p>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:ssgpt6@aol.com"
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #FFD700, #E6B800)",
                  color: "#091321",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 800,
                }}
              >
                Contact Now
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Upgrade Next Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}