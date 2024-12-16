import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ViewNote = () => {
  const { id } = useParams();

  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchNote = async () => {
      await axios.get(`http://localhost:5000/api/notes/${id}`).then(res => {
        if (res.status === 200) {
          setNote({ title: res.data.title, content: res.data.content });
        }
      });
    };

    fetchNote();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <p className="mb-4">{note.content}</p>
      <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded">
        Go Back
      </Link>
    </div>
  );
};

export default ViewNote;
