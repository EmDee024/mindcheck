const NoteInput = ({ note, setNote }) => {
  return (
    <div style={{ width: "60%", margin: "40px auto", textAlign: "center" }}>
      <h3>Optional Note</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a few words about your day..."
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
};

export default NoteInput;