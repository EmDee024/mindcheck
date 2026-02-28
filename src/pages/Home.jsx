import { useState, useEffect } from "react";
import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import NoteInput from "../components/NoteInput";
import QuoteCard from "../components/QuoteCard";

const Home = ({ moodHistory, setMoodHistory }) => {
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState(null);

  // Fetch quote on mount
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(
          "https://api.quotable.io/random"
        );
        const data = await res.json();

        setQuote({
          q: data.content,
          a: data.author,
        });
      } catch (error) {
        console.error("Quote error:", error);
      }
    };

    fetchQuote();
  }, []);

  const handleSave = () => {
    if (!mood) {
      alert("Please select a mood first.");
      return;
    }

    const today = new Date().toLocaleDateString();

    const newEntry = {
      mood,
      note,
      date: today,
    };

    const updatedHistory = [
      newEntry,
      ...moodHistory,
    ];

    // Update state
    setMoodHistory(updatedHistory);

    // Save to localStorage
    localStorage.setItem(
      "moodHistory",
      JSON.stringify(updatedHistory)
    );

    // Reset form
    setMood(null);
    setNote("");

    alert("Mood saved successfully!");
  };

  return (
    <div>
      <Header />

      <MoodSelector
        mood={mood}
        setMood={setMood}
      />

      <NoteInput
        note={note}
        setNote={setNote}
      />

      <div style={{ textAlign: "center" }}>
        <button onClick={handleSave}>
          Save Entry
        </button>
      </div>

      <QuoteCard quote={quote} />
    </div>
  );
};

export default Home;