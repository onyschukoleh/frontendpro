import { useEffect, useState } from "react";
import { SmileyFaceVoting } from "../components/SmileyFaceVoiting.jsx";
import { SmileyFaceWinner } from "../components/SmileyFaceWinner.jsx";

const entries={ "😀": 0, "😍": 0, "😎": 0, "🚀": 0, "❤️": 0 };

export const Home = () => {
  const [winner, setWinner] = useState("");
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem("emojiVotes");
    return saved ? JSON.parse(saved) : entries;
  });

  useEffect(() => {
    (votes) => {
      localStorage.setItem("emojiVotes", JSON.stringify(votes));
    };
  }, [votes]);

  const clearlocalStorage = () => {
    return localStorage.removeItem("emojiVotes");
  };

  const clearResults = () => {
    const resetVotes = entries;
    setVotes(resetVotes);
    setWinner("");
    clearlocalStorage();
  };

  const returnToVoiting = () => {
    setWinner("");
  };

  return (
    <>
      {winner ? (
        <SmileyFaceWinner
          winner={winner}
          votes={votes}
          returnToVoiting={returnToVoiting}
         
        />
      ) : (
        <SmileyFaceVoting
          votes={votes}
          setVotes={setVotes}
          setWinner={setWinner}
           clearResults={clearResults}
        />
      )}
    </>
  );
};
