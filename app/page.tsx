export default function Home() {
  const cardStyle: React.CSSProperties = {
    background: "#142b4d",
    borderRadius: "18px",
    padding: "24px",
    width: "100%",
    maxWidth: "320px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  };

  const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 24px",
    background: "gold",
    color: "#111",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <main
      style={{
        background: "linear-gradient(to bottom, #081426, #0b1a2f)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 20px 80px",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            paddingBottom: "20px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, color: "gold", fontSize: "34px" }}>
              AAEA Smart Energy Module
            </h1>
            <p style={{ marginTop: "8px", opacity: 0.9 }}>
              AI-Powered Air & Heat Energy Optimization System
            </p>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              fontSize: "15px",
            }}
          >
            <a href="#features" style={{ color: "white", textDecoration: "none" }}>
              Features
            </a>
            <a href="#packages" style={{ color: "white", textDecoration: "none" }}>
              Packages
            </a>
            <a href="#about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
            <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "center",
            padding: "30px 0 40px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,215,0,0.12)",
                color: "gold",
                border: "1px solid rgba(255,215,0,0.3)",
                borderRadius: "999px",
                padding: "8px 14px",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              Low-Cost • AI-Controlled • Scalable
            </div>

            <h2 style={{ fontSize: "42px", lineHeight: 1.15, margin: "0 0 16px" }}>
              Convert airflow and heat loss into smarter energy use
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.7, opacity: 0.92 }}>
              AAEA is designed to capture environmental airflow and temperature
              differences, improve efficiency, support continuity during outages,
              and open the path to intelligent energy automation.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
              <a href="#packages" style={buttonStyle}>
                View Packages
              </a>
              <a
                href="#contact"
                style={{
                  ...buttonStyle,
                  background: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "#102440",
                borderRadius: "22px",
                padding: "20px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src="/aaea-product.png"
                alt="AAEA Smart Energy Module"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  objectFit: "cover",
                  minHeight: "320px",
                  background: "#0f223d",
                }}
              />
              <p
                style={{
                  marginTop: "14px",
                  fontSize: "14px",
                  opacity: 0.8,
                  textAlign: "center",
                }}
              >
                Product preview image — place your final image in
                <strong> public/aaea-product.png</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{ padding: "30px 0" }}>
          <h2 style={{ color: "gold", fontSize: "30px", textAlign: "center" }}>
            Core Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginTop: "24px",
            }}
          >
            {[
              "Captures airflow and thermal difference opportunities",
              "Supports AI-controlled energy optimization",
              "Battery backup for continuity during outages",
              "Expandable design for future multi-module systems",
              "Low-cost starting architecture for pilot deployment",
              "Website-ready product model for launch and sales",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#112541",
                  borderRadius: "16px",
                  padding: "20px",
                  lineHeight: 1.6,
                }}
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section id="packages" style={{ padding: "40px 0" }}>
          <h2 style={{ color: "gold", fontSize: "30px", textAlign: "center" }}>
            Packages
          </h2>
          <p style={{ textAlign: "center", opacity: 0.85, maxWidth: "760px", margin: "10px auto 0" }}>
            Choose a package that matches your starting level. You can begin with a
            simple concept package and later expand to advanced or industrial versions.
          </p>

          <div
            style={{
              display: "flex",
              gap: "22px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ color: "gold", marginTop: 0 }}>Basic</h3>
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>$99</p>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
                Starter concept package for the AAEA system with entry-level product
                access and support.
              </p>
              <ul style={{ textAlign: "left", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Basic system overview</li>
                <li>Starter product access</li>
                <li>Email support</li>
              </ul>
              <a
                href="https://www.paypal.com/paypalme/YOURUSERNAME/99"
                target="_blank"
                rel="noreferrer"
                style={buttonStyle}
              >
                Buy Basic
              </a>
            </div>

            <div
              style={{
                ...cardStyle,
                border: "2px solid gold",
                transform: "scale(1.02)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "gold",
                  color: "#111",
                  borderRadius: "999px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                MOST POPULAR
              </div>
              <h3 style={{ color: "gold", marginTop: 0 }}>Advanced</h3>
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>$199</p>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
                Stronger package for users who want deeper access and a more advanced
                energy optimization setup.
              </p>
              <ul style={{ textAlign: "left", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Everything in Basic</li>
                <li>Expanded product details</li>
                <li>Priority email support</li>
              </ul>
              <a
                href="https://www.paypal.com/paypalme/YOURUSERNAME/199"
                target="_blank"
                rel="noreferrer"
                style={buttonStyle}
              >
                Buy Advanced
              </a>
            </div>

            <div style={cardStyle}>
              <h3 style={{ color: "gold", marginTop: 0 }}>Pro / Industrial</h3>
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>$499</p>
              <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
                Premium package for larger deployment planning, stronger system
                direction, and industrial-level consultation positioning.
              </p>
              <ul style={{ textAlign: "left", lineHeight: 1.8, paddingLeft: "20px" }}>
                <li>Everything in Advanced</li>
                <li>Industrial concept support</li>
                <li>Premium contact priority</li>
              </ul>
              <a
                href="https://www.paypal.com/paypalme/YOURUSERNAME/499"
                target="_blank"
                rel="noreferrer"
                style={buttonStyle}
              >
                Buy Pro
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "30px 0" }}>
          <div
            style={{
              background: "#112541",
              borderRadius: "20px",
              padding: "28px",
              lineHeight: 1.8,
            }}
          >
            <h2 style={{ color: "gold", marginTop: 0 }}>About the System</h2>
            <p>
              The AAEA platform is positioned as an AI-powered air and heat energy
              optimization concept. Its purpose is to identify useful temperature
              differences, airflow opportunities, and continuity strategies that can
              support smarter energy usage and resilience.
            </p>
            <p>
              This site presents the concept as a product-facing platform under
              GNAIAAAC LLC and can be expanded later with images, dashboards,
              technical manuals, and live order systems.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: "40px 0 10px", textAlign: "center" }}>
          <h2 style={{ color: "gold", fontSize: "30px" }}>Contact</h2>
          <p style={{ fontSize: "18px" }}>Email: ssgpt6@aol.com</p>
          <p style={{ opacity: 0.75 }}>
            GNAIAAAC LLC • AAEA Smart Energy Module
          </p>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: "30px",
            paddingTop: "22px",
            textAlign: "center",
            opacity: 0.7,
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} GNAIAAAC LLC. All rights reserved.
        </footer>
      </section>
    </main>
  );
}