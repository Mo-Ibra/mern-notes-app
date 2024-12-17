import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../config/axiosConfig";
import NoteCard from "../../Components/NoteCard/NoteCard";
import { useLoading } from "../../context/LoadingContext";

const Home = () => {
  const [notes, setNotes] = useState(null);
  const [error, setError] = useState(null);
  const { startLoading, stopLoading } = useLoading();

  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch All Notes
    const getNotes = async () => {
      startLoading();

      try {
        const res = await api.get("http://localhost:5000/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setFilteredNotes(res.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        stopLoading();
      }
    };

    getNotes();
  }, [startLoading, stopLoading]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
    );

    setFilteredNotes(filtered);
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
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Notes</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search notes..."
          className="border p-2 w-full outline-none rounded"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Render All Notes */}
      {filteredNotes && filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        ))
      ) : (
        <p className="text-gray-500 my-2">No notes found</p>
      )}

      <Link
        to="/add-note"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add Note
      </Link>
    </div>
  );
};

export default Home;
