const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>MindCheck</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "20px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
  },
  title: {
    margin: 0,
    color: "#333",
  },
};

export default Header;