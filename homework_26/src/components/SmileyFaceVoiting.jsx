
import { SmileyFace } from "../components/SmileyFace";
export const SmileyFaceVoting = ({ votes, setVotes, setWinner, entries,setShowModal }) => {
 

  const clearResults = () => {
    setVotes(entries);
    setWinner("");
  };

  const showResults = () => {
    const values = Object.values(votes);
    const maxVotes = Math.max(...values);
    // якщо всі нулі
    if (maxVotes === 0) {
      setWinner("");
      setShowModal(true);

      return;
    }
    const maxEmoji = Object.keys(votes).find(
      (emoji) => votes[emoji] === maxVotes,
    );
    setWinner(maxEmoji);
     setShowModal(true);
  };

  return (
    <div className="container text-center mt-2" style={{ fontStyle: "italic" }}>
      <h2>Голосування за найкращий смайлик:</h2>

      <SmileyFace
        votes={votes}
        setVotes={setVotes}
        setShowModal={setShowModal}
      />

      <div className="mt-2">
        <button className="btn btn-success me-3" onClick={showResults}>
          Show Results
        </button>
        <button className="btn btn-danger" onClick={clearResults}>
          Clear Results
        </button>
        
      </div>
    </div>
  );
};
