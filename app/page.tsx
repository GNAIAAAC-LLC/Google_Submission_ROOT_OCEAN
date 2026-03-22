export default function Home() {
  return (
    <main style={{
      background: "#0b1a2f",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>

      {/* HERO */}
      <h1 style={{ color: "gold", fontSize: "32px" }}>
        AAEA Smart Energy Module
      </h1>

      <p style={{ fontSize: "18px" }}>
        AI-Powered Air & Heat Energy Optimization System
      </p>

      <button style={{
        marginTop: "20px",
        padding: "15px 25px",
        background: "gold",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
      onClick={() => {
        const el = document.getElementById("buy");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}>
        Buy Now
      </button>

      {/* FEATURES */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ color: "gold" }}>Features</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✔ Converts airflow & heat into usable energy</li>
          <li>✔ AI-controlled efficiency optimization</li>
          <li>✔ Battery backup for outage protection</li>
          <li>✔ Low-cost and scalable system</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ color: "gold" }}>How It Works</h2>

        <p>
          The system captures airflow and temperature differences, converts them into electrical energy,
          stores it in a battery, and uses AI to optimize performance automatically.
        </p>
      </section>

      {/* PRICING */}
      <section id="buy" style={{ marginTop: "50px" }}>
        <h2 style={{ color: "gold" }}>Pricing</h2>

        <div style={{
          background: "#142b4d",
          padding: "20px",
          borderRadius: "15px",
          maxWidth: "300px",
          margin: "0 auto"
        }}>
          <h3>AAEA Basic</h3>
          <p style={{ fontSize: "24px", color: "gold" }}>$99</p>

          <a
            href="https://www.paypal.com/paypalme/YOURUSERNAME/99"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "12px 25px",
              background: "gold",
              color: "black",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Pay with PayPal
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ color: "gold" }}>Contact</h2>
        <p>Email: ssgpt6@aol.com</p>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "60px", opacity: 0.7 }}>
        <p>© GNAIAAAC LLC — AAEA System</p>
      </footer>

    </main>
  );
}