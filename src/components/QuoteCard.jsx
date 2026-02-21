const QuoteCard = () => {
  return (
    <div style={styles.card}>
      <p style={styles.quote}>
        "Happiness depends upon ourselves."
      </p>
      <p style={styles.author}>– Aristotle</p>
    </div>
  );
};

const styles = {
  card: {
    width: "60%",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#A8D5BA",
    borderRadius: "10px",
    textAlign: "center",
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontWeight: "bold",
  },
};

export default QuoteCard;