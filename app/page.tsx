export default function Dashboard() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Arial",
      background: "#0b1a2f",
      color: "white",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "gold" }}>SSGPT6 Dashboard</h1>

      <p>Welcome to your AI control panel.</p>

      <div style={{ marginTop: "30px" }}>
        <div style={{
          background: "#122a45",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "15px"
        }}>
          System Status: Active
        </div>

        <div style={{
          background: "#122a45",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "15px"
        }}>
          Users: 0
        </div>

        <div style={{
          background: "#122a45",
          padding: "20px",
          borderRadius: "10px"
        }}>
          Services: Ready
        </div>
      </div>
    </main>
  );
}