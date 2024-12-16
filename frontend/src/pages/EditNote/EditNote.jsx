import api from '../../config/axiosConfig';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";

const EditNote = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchNote = async () => {
      await api.get(`http://localhost:5000/api/notes/${id}`).then(res => {
        if (res.status === 200) {
          setNote({ title: res.data.title, content: res.data.content });
        }
      });
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.title || !note.content) {
      toast.error("Please enter a title and content", {
        position: "bottom-right",
      });
      return;
    }

    startLoading();

    try {
      await api
        .put(`http://localhost:5000/api/notes/${id}`, {
          title: note.title,
          content: note.content,
        })
        .then((res) => {
          console.log(res.data);

          if (res.status === 200) {
            toast.success("Note updated successfully", {
              position: "bottom-right",
            });
          }
        });
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      stopLoading();
    }
  };

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-4 outline-none text-gray-500 font-bold"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="border p-2 w-full mb-4 outline-none text-gray-500"
          rows="10"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit Note
        </button>
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
            Back
          </button>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default EditNote;
