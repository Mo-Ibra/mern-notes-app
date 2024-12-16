import api from "../../config/axiosConfig";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useLoading } from "../../context/LoadingContext";

const AddNote = () => {

  const [note, setNote] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);
  
  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.title || !note.content) {
      toast.error("Please enter a title and content", { position: 'bottom-right'});
      return;
    }

    if (note.title.length < 5 || note.content.length < 5) {
      toast.error("Title and content must be at least 5 characters long", { position: 'bottom-right'});
      return;
    }

    startLoading();

    try {

      await api.post("http://localhost:5000/api/notes", note).then(res => {
        if (res.status === 201) {
          console.log(res.data);
          toast.success("Note added successfully", { position: 'bottom-right'});
  
          setNote({ title: "", content: ""});
        }
      });

    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      stopLoading();
    }
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Add Note</h1>
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
          Add Note
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

export default AddNote;