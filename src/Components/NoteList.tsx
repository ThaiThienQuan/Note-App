import { useCallback, useState } from "react";
import type { Note } from "../types/note";

interface Props {
  notes: Note[];
  deleteNote: (id: string) => void;
  updateNote: (id: string, updateNote: Note) => void;
  filterNote: Note[];
}

export default function NoteList({ notes, deleteNote, filterNote }: Props) {
  const [editId, seteditId] = useState<string | null>(null);
  const [edit, setedit] = useState({
    title: "",
    content: "",
  });
  const handleChange = useCallback((i) => {
    const { name, type, checked, value } = i.target;
    setedit((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const handleSave = () => {};
  const handleEdit = () => {};
  return (
    <div>
      {notes.length == 0 ? (
        <p>No notes yet</p>
      ) : (
        filterNote.map((note) => (
          <div
            key={note.id}
            className="border p-3 mb-2 rounded shadow-sm bg-gray-50"
          >
            {editId === note.id ? (
              <>
                <input
                  type="text"
                  value={edit.title}
                  onChange={handleChange}
                  className="border p-2 w-full mb-2"
                />
                <textarea
                  value={edit.content}
                  onChange={handleChange}
                  className="border p-2 w-full mb-2"
                />
                <button
                  onClick={handleSave(note.id, note)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => seteditId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel Edit
                </button>
              </>
            ) : (
              <>
                <p>{note.id}</p>
                <h2 className="font-bold">{note.title}</h2>
                <p>{note.content}</p>
                <p>{note.price}</p>
                <p>{note.available ? "Saved" : "Not save"}</p>
                <strong>
                  <small>{new Date(note.createAt).toString()}</small>
                </strong>
                <button
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                  className="text-red-500 mt-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEdit(note);
                  }}
                  className="text-blue-500 mt-2"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
