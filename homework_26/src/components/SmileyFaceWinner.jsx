export const SmileyFaceWinner = ({ winner, votes }) => {
  return (
    <>
      {winner ? (
        <div
          className="container text-center mt-1"
          style={{ fontStyle: "italic" }}
        >
          <h2>Результати голосування:</h2>
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
          </div>
        </div>
      ) : (
        <p
          className="container text-center mt-1"
          style={{ fontStyle: "italic" }}
        >
          проголосуйте будь ласка .... 🚀
        </p>
      )}
    </>
  );
};
