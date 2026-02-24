import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MoodHistory from "./components/MoodHistory";

function App() {
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setMoodHistory(saved);
  }, []);

  return (
    <div className="container">
      <h1>MindCheck</h1>

      <Home moodHistory={moodHistory} setMoodHistory={setMoodHistory} />

      <MoodHistory moods={moodHistory} />
    </div>
  );
}

export default App;