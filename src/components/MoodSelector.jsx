import { useState } from "react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = ["😞", "😐", "🙂", "😊", "😄"];

  return (
    <div style={styles.container}>
      <h2>How are you feeling today?</h2>
      <div style={styles.moodRow}>
        {moods.map((mood, index) => (
          <button
            key={index}
            style={{
              ...styles.button,
              border:
                selectedMood === mood
                  ? "2px solid #8B0000"
                  : "1px solid #ddd",
            }}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
  moodRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
  },
  button: {
    fontSize: "24px",
    padding: "10px",
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
  },
};

export default MoodSelector;