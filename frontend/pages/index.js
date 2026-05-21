import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://anne-yoda-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <header style={{ backgroundColor: "#2c3e50", color: "#fff", padding: "1.5rem", textAlign: "center" }}>
        <h1>{portfolio.name}</h1>
        <h2>{portfolio.title}</h2>
      </header>

      <main style={{ flex: "1", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <section>
          <h3>Skills</h3>
          <ul>
            {portfolio.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </section>

        <section>
          <h3>Qualifications</h3>
          <ul>
            {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>

        <section>
          <h3>Projects</h3>
          <ul>
            {portfolio.projects.map((proj, i) => <li key={i}>{proj}</li>)}
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <p>Email: {portfolio.contact.email}</p>
          <p>Phone: {portfolio.contact.phone}</p>
        </section>
      </main>

      <footer style={{ backgroundColor: "#333", color: "#ccc", textAlign: "center", padding: "1rem" }}>
        <p>© 2026 Anne Kibonde Portfolio | Powered by Vercel & Render</p>
      </footer>
    </div>
  );
}

  useEffect(() => {
    fetch("https://anne-yoda-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
