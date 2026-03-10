import Header from "../header";
import Footer from "../footer";

export default function Projects() {
  return (
    <>
      <Header />

      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>SSGPT6 Projects</h1>

        <h2>Main Platforms</h2>
        <ul>
          <li>
            <a href="https://tradehub.ssgpt6.com">TradeHub Platform</a>
          </li>
          <li>
            <a href="https://earnai.vercel.app">EarnAI Platform</a>
          </li>
        </ul>

        <h2>AI Development</h2>
        <ul>
          <li>AI Academy</li>
          <li>AI Sleeping Agent</li>
          <li>DomainSync AI</li>
        </ul>

        <h2>Media</h2>
        <ul>
          <li>Video</li>
          <li>Podcast</li>
          <li>Webinars</li>
        </ul>

        <h2>Company</h2>
        <p>GNAIAAAC LLC</p>
      </main>

      <Footer />
    </>
  );
}