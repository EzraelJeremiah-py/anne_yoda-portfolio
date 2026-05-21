import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://anne-yoda-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) return <p style={{ textAlign: "center", marginTop: "2rem", color: "gold" }}>Loading...</p>;

  return (
    <div style={{
      fontFamily: "Segoe UI, Arial, sans-serif",
      backgroundColor: "black",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{ backgroundColor: "blue", color: "gold", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>{portfolio.name}</h1>
        <h2 style={{ margin: 0, fontWeight: "normal" }}>{portfolio.title}</h2>
      </header>

      {/* Main Content */}
      <main style={{ flex: "1", padding: "2rem", maxWidth: "900px", margin: "0 auto", color: "gold" }}>
        <section>
          <h3 style={{ color: "blue" }}>Skills</h3>
          <ul>
            {portfolio.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </section>

        <section>
          <h3 style={{ color: "blue" }}>Qualifications</h3>
          <ul>
            {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>

        <section>
          <h3 style={{ color: "blue" }}>Projects</h3>
          <ul>
            {portfolio.projects.map((proj, i) => <li key={i}>{proj}</li>)}
          </ul>
        </section>

        <section>
          <h3 style={{ color: "blue" }}>Contact</h3>
          <p style={{ color: "blue" }}>Email: {portfolio.contact.email}</p>
          <p style={{ color: "blue" }}>Phone: {portfolio.contact.phone}</p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "gold", textAlign: "center", padding: "1rem" }}>
        <p>© 2026 Anne Kibonde Portfolio | Built with Next.js & Flask</p>
      </footer>
    </div>
  );
}
