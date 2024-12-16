import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import NoteCard from "../../Components/NoteCard/NoteCard";

const Home = () => {

  const [notes, setNotes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    // Fetch All Notes
    const getNotes = () => {
      axios.get('http://localhost:5000/api/notes').then(res => {
        console.log(res.data);
        setNotes(res.data);
      }).catch(err => {
        console.log(err);
        setError(err);
      });
    }

    getNotes();

  }, []);

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

      {/* Render All Notes */}
      { notes && notes.map(note => (
        <NoteCard key={note.id} id={note.id} title={note.title} content={note.content} />
      )) }

      <Link to="/add-note" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add Note
      </Link>

    </div>
  )
}

export default Home;