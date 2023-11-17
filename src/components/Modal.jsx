import { XCircleIcon } from "@heroicons/react/24/outline";
const Modal = ({ children, openModal, setOpenModal, title }) => {
  if (!openModal) return null;
  return (
    <div>
      <div className="backdrop" onClick={() => setOpenModal(false)}></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={() => setOpenModal(false)}>
            <XCircleIcon className="icon red" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
