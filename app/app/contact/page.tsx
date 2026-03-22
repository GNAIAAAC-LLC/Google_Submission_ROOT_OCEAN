"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{
      background: "#0b1a2f",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "gold", textAlign: "center" }}>
        Partnership Inquiry
      </h1>

      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{
            maxWidth: "500px",
            margin: "40px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input placeholder="Company Name" required style={{ padding: "10px" }} />
          <input placeholder="Your Name" required style={{ padding: "10px" }} />
          <input placeholder="Email" required style={{ padding: "10px" }} />
          <textarea placeholder="Message" required style={{ padding: "10px", height: "120px" }} />

          <button style={{
            padding: "12px",
            background: "gold",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}>
            Send Inquiry
          </button>
        </form>
      ) : (
        <p style={{ textAlign: "center" }}>
          Thank you. We will contact you shortly.
        </p>
      )}
    </main>
  );
}