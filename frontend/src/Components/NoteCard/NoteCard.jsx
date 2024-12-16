import { Link } from "react-router-dom";

const NoteCard = ({ id, title, content }) => {

  return (
    <div key={id}>
      <div className="border p-4 mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{content}</p>
        <div className="flex space-x-4 mt-2">
          <Link to={`/edit-note/${id}`} className="text-blue-500">
            Edit
          </Link>
          <Link to={`/view-note/${id}`} className="text-blue-500">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;