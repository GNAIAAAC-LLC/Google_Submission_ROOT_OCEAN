import Header from "../header";
import Footer from "../footer";

export default function Contact() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>Contact</h1>

        <p>If you have questions about SSGPT6 or GNAIAAAC LLC, contact us below.</p>

        <h2>Email</h2>
        <p>
          <a href="mailto:ssgpt6@aol.com">ssgpt6@aol.com</a>
        </p>

        <h2>Website</h2>
        <p>
          <a href="https://ssgpt6.com">https://ssgpt6.com</a>
        </p>

        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://tradehub.ssgpt6.com">TradeHub</a>
          </li>
          <li>
            <a href="https://earnai.vercel.app">EarnAI</a>
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}