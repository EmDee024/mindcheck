function MoodHistory({ moods }) {
  return (
    <div>
      <h2>Mood History</h2>
      {moods.length === 0 ? (
        <p>No moods recorded yet.</p>
      ) : (
        <ul>
          {moods.map((mood, index) => (
            <li key={index}>{mood}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoodHistory;