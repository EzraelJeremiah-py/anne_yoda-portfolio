import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://anne-yoda-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) return <p style={{ textAlign: "center", marginTop: "2rem", color: "black" }}>Loading..........</p>;

  return (
    <div style={{
      fontFamily: "Segoe UI, Arial, sans-serif",
      backgroundColor: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{ backgroundColor: "silver", color: "black", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>{portfolio.name}</h1>
        <h2 style={{ margin: 0, fontWeight: "normal" }}>{portfolio.title}</h2>
      </header>

      {/* Floating Cards */}
      <main style={{
        flex: "1",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {/* Skills Card */}
        <div style={{
          backgroundColor: "#111",
          color: "gold",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "blue" }}>Skills</h3>
          <ul>
            {portfolio.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        {/* Qualifications Card */}
        <div style={{
          backgroundColor: "#111",
          color: "gold",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "blue" }}>Qualifications</h3>
          <ul>
            {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </div>

        {/* Projects Card */}
        <div style={{
          backgroundColor: "#111",
          color: "gold",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "blue" }}>Projects</h3>
          <ul>
            {portfolio.projects.map((proj, i) => <li key={i}>{proj}</li>)}
          </ul>
        </div>

        {/* Contact Card */}
        <div style={{
          backgroundColor: "#111",
          color: "gold",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{ color: "white" }}>Contact</h3>
          <p style={{ color: "white" }}>Email: {portfolio.contact.email}</p>
          <p style={{ color: "white" }}>Phone: {portfolio.contact.phone}</p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "gold", textAlign: "center", padding: "1rem" }}>
        <p>© 2026 Anne Kibonde Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
