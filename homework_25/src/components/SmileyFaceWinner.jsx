export const SmileyFaceWinner = ({
  winner,
  votes,
  returnToVoiting,
  clearResults,
}) => {
  return (
    <div className="container text-center mt-1" style={{ fontStyle: "italic" }}>
      <h2>Результати голосування:</h2>
      {winner && (
        <div className="mt-2">
          <h3>Переможець:</h3>
          <div
            style={{
              fontSize: "40px",
            }}
          >
            {winner}
          </div>
          <p>Кількість голосів: {votes[winner]}</p>
          <button className="btn btn-success" onClick={returnToVoiting}>
            Return To Voiting
          </button>
          <button className="btn btn-danger" onClick={clearResults}>
            Clear Results
          </button>
        </div>
      )}
    </div>
  );
};
