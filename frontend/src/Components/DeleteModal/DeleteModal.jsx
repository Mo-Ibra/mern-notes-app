import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const DeleteModal = ({ isOpen, title = 'Confirm Delete', onCancel, onConfirm }) => {
  
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    if (confirmText === 'delete') {
      onConfirm();
    } else {
      toast.error("Please enter 'delete' to confirm deletion", {
        position: 'bottom-right'
      });
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">
          Type <strong>"delete"</strong> below to confirm the deletion of this
          note.
        </p>
        <input
          type="text"
          placeholder="Type 'delete' here"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => {
              onCancel();
              setConfirmText('');
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
