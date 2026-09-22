export const SmileyFaceVoting = ({ votes, setVotes, setWinner }) => {
  const handleVote = (emoji) => {
    setVotes((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  const showResults = () => {
    const values = Object.values(votes);
    const maxVotes = Math.max(...values);
    // якщо всі нулі
    if (maxVotes === 0) {
      setWinner("");
      return;
    }
    const maxEmoji = Object.keys(votes).find(
      (emoji) => votes[emoji] === maxVotes,
    );

    setWinner(maxEmoji);
  };

  return (
    <div className="container text-center mt-2" style={{ fontStyle: "italic" }}>
      <h2>Голосування за найкращий смайлик:</h2>

      <div className="row justify-content-center">
        {Object.entries(votes).map(([emoji, count]) => (
          <div key={emoji} className="col-2">
            <p>
              <button
                className="btn btn-light fs-1"
                onClick={() => handleVote(emoji)}
              >
                {emoji}
              </button>{" "}
              <strong>{count}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <button className="btn btn-success me-3" onClick={showResults}>
          Show Results
        </button>
      </div>
    </div>
  );
};
