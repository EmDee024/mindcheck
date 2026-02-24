const QuoteCard = ({ quote }) => {
  if (!quote) return <p style={{ textAlign: "center" }}>Loading quote...</p>;

  return (
    <div
      style={{
        width: "60%",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#A8D5BA",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <p style={{ fontStyle: "italic" }}>"{quote.q}"</p>
      <p style={{ fontWeight: "bold" }}>– {quote.a}</p>
    </div>
  );
};

export default QuoteCard;