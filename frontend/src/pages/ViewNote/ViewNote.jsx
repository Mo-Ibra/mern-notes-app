import api from "../../config/axiosConfig";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";

const ViewNote = () => {
  const { id } = useParams();

  const [note, setNote] = useState({ title: "", content: "" });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      await api.get(`http://localhost:5000/api/notes/${id}`).then((res) => {
        if (res.status === 200) {
          setNote({ title: res.data.title, content: res.data.content });
        }
      });
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    await api
      .delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { "Content-Type": "application/json" },
        data: { validation: 'delete' },
      })
      .then((res) => {
        console.log(res);
        // Navigate to the home page
        window.location.href = "/";
        toast.success("Note deleted successfully", {
          position: "bottom-right",
        });
      });
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <p className="mb-4">{note.content}</p>

      <button
        className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Delete
      </button>

      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Return Back
        </button>
      </Link>

      <DeleteModal
        isOpen={modalOpen}
        onCancel={() => setModalOpen(false)}
        onConfirm={() => {
          handleDelete()
          setModalOpen(false)
        }}
        title="Confirm Deletion"
      />
    </div>
  );
};

export default ViewNote;
