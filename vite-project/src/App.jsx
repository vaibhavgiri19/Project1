import { useState } from "react";

function App() {
  const [mood, setMood] = useState("😊");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mood Changer 🎭</h1>
      <h2 style={{ fontSize: "100px" }}>{mood}</h2>

      <div>
        <button onClick={() => setMood("😊")}>Happy</button>
        <button onClick={() => setMood("😢")}>Sad</button>
        <button onClick={() => setMood("😡")}>Angry</button>
        <button onClick={() => setMood("🤩")}>Excited</button>
      </div>
    </div>
  );
}

export default App;
