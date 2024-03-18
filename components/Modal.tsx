interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, closeModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="bg-neutral-200 rounded-lg p-4 w-full max-w-sm">
        <div className="flex justify-end">
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <h1 className="text-black">Title</h1>
          <p className="text-neutral-700 text-sm">Lorem ipsum</p>
          <button
            className="bg-blue-500 text-white p-2 rounded-md mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
