import { useState } from "react";

const NoteInput = () => {
  const [note, setNote] = useState("");

  return (
    <div style={styles.container}>
      <h3>Optional Note</h3>
      <textarea
        style={styles.textarea}
        placeholder="Write a few words about your day..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "60%",
    margin: "40px auto",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
};

export default NoteInput;