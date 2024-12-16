import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const AddNote = () => {

  const [note, setNote] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.title || !note.content) {
      toast.error("Please enter a title and content", { position: 'bottom-right'});
      return;
    }

    try {

      const response = await fetch("http://localhost:5000/api/noteds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (response.ok) {
        console.log(response);
        toast.success("Note added successfully", { position: 'bottom-right'});

        setNote({ title: "", content: ""});
      }

    } catch (err) {
      console.log(err);
      setError(err);
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
    <div className="p-4">
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
          Add Note
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddNote;