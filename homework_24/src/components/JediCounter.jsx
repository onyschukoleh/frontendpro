

export const JediCounter = ({count,setCount}) => {


  return (
    
    <div className="d-flex justify-content-center mt-5">
      <div className="card bg-dark text-warning border-warning shadow-lg">
        <div className="card-body text-center">
          <h2>⚔️ Jedi Counter</h2>

          <p>Power Level</p>

          <h1 className="display-3 fw-bold">
            {count}
          </h1>

          <button
            className="btn btn-success me-3"
            onClick={() => setCount((prev) => prev + 1)}
          >
            + Force
          </button>

          <button
            className="btn btn-danger"
            onClick={() => setCount((prev) => prev - 1)}
          >
            - Force
          </button>
        </div>
      </div>
    </div>
  );
};