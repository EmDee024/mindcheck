function MoodHistory({ moods = [] }) {
  if (!Array.isArray(moods)) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Previous Entries</h2>

      {moods.length === 0 ? (
        <p>No mood history yet.</p>
      ) : (
        <ul>
          {moods.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}</strong> — {entry.mood}
              {entry.note && <p>{entry.note}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoodHistory;