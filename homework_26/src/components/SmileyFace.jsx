export const SmileyFace = ({ votes, setVotes, setShowModal }) => {
  const handleVote = (emoji) => {
    setShowModal(false);
    setVotes((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  return (
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
  );
};
