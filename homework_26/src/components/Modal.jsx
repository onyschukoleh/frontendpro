export const Modal =({ show, title, children, onClose })=>{

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal d-block fade show"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg">
            <div className="bg-primary modal-header">
              <h5 className="modal-title text-white">{title}</h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              {children}
            </div>

            <div className="bg-dark modal-footer">
              <button
                className="btn mb-0 btn-secondary"
                onClick={onClose}
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

