import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://anne-yoda-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data));
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>{portfolio.name}</h1>
      <h2>{portfolio.title}</h2>

      <h3>Skills</h3>
      <ul>
        {portfolio.skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>

      <h3>Qualifications</h3>
      <ul>
        {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
      </ul>

      <h3>Projects</h3>
      <ul>
        {portfolio.projects.map((proj, i) => <li key={i}>{proj}</li>)}
      </ul>

      <h3>Contact</h3>
      <p>Email: {portfolio.contact.email}</p>
      <p>Phone: {portfolio.contact.phone}</p>
    </div>
  );
}
