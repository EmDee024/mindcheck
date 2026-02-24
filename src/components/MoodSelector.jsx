const MoodSelector = ({ mood, setMood }) => {
  const moods = ["😞", "😐", "🙂", "😊", "😄"];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>How are you feeling today?</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {moods.map((m, index) => (
          <button
            key={index}
            onClick={() => setMood(m)}
            style={{
              fontSize: "24px",
              padding: "10px",
              borderRadius: "50%",
              border: mood === m ? "2px solid #8B0000" : "1px solid #ddd",
              background: "white",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;