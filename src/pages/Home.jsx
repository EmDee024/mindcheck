import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import NoteInput from "../components/NoteInput";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  return (
    <div>
      <Header />
      <MoodSelector />
      <NoteInput />
      <QuoteCard />
    </div>
  );
};

export default Home;