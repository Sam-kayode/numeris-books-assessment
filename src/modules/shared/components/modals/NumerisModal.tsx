import "./modals.scss";

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
        <div>
          <button className="modal-close" onClick={onClose}>
            <img src="/assets/icons/close.svg" alt="" />
          </button>
        </div>

        <div className="children-content">{children}</div>
      </div>
    </div>
  );
};

export default NumerisModal;
