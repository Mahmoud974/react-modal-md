import "./Modal.css";

function Modal({ id, showModal, closeModal, parameter, message }) {
  return (
    <>
      {showModal === true && (
        <div className="modal" id={id} style={parameter}>
          <div className="modal-content">
            <span className="modal-close-icon" onClick={closeModal}>
              ✖
            </span>
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
