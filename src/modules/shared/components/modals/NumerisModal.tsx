import "./Modal.css"; // Importing the CSS for animations

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const NumerisModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <div className={`modal ${isVisible ? "modal-show" : "modal-hide"}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default NumerisModal;
