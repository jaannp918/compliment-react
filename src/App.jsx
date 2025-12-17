




export default function App() {
  const compliments = [
    "You are smarter than you think.",
    "You have great taste.",
    "You’re doing better than yesterday.",
    "You’re not average — stop thinking that.",
    "You actually finished this. Respect."
  ];

  const random =
    compliments[Math.floor(Math.random() * compliments.length)];

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "white",
      fontSize: "22px",
      padding: "20px",
      textAlign: "center"
    }}>
      {random}
    </div>
  );
}
