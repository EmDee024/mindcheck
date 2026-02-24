import { useState, useEffect } from "react";
import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import NoteInput from "../components/NoteInput";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState(null);

  // Fetch quote on mount
  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  // Save entry to localStorage
  const saveEntry = (selectedMood) => {
    const entry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem("moodEntries")) || [];
    localStorage.setItem(
      "moodEntries",
      JSON.stringify([entry, ...existing])
    );

    alert("Mood saved!");
  };

  return (
    <div>
      <Header />
      <MoodSelector mood={mood} setMood={setMood} />
      <NoteInput note={note} setNote={setNote} />

      <div style={{ textAlign: "center" }}>
        <button onClick={saveEntry}>Save Entry</button>
      </div>

      <QuoteCard quote={quote} />
    </div>
  );
};

export default Home;