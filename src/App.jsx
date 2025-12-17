import { useState } from "react";
import "./App.css";

const compliments = [
  "You're not average — stop thinking that.",
  "You’re doing better than you think.",
  "Discipline will take you where motivation can’t.",
  "Stay quiet. Let results talk.",
  "You don’t need validation to be valuable.",
  "Most people quit. You didn’t.",
  "You’re building something real."
];

export default function App() {
  const [index, setIndex] = useState(0);

  const nextCompliment = () => {
    setIndex((prev) => (prev + 1) % compliments.length);
  };

  return (
    <div className="container" onClick={nextCompliment}>
      <p className="text">{compliments[index]}</p>
      <span className="hint">Tap anywhere</span>
    </div>
  );
}
