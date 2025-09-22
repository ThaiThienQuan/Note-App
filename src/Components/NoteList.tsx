import { useCallback, useState } from "react";
import type { Note } from "../types/note";

interface Props {
  notes: Note[];
  deleteNote: (id: string) => void;
  updateNote: (id: string, updateNote: Note) => void;
  filterNote: Note[];
}

export default function NoteList({
  notes,
  deleteNote,
  filterNote,
  updateNote,
}: Props) {
  const [editId, seteditId] = useState<string | null>(null);
  const [edit, setedit] = useState({
    title: "",
    content: "",
    price: 0,
    available: false,
  });
  const handleEdit = (id) => {
    const editnote = notes.find((prev) => prev.id === id);
    if (editnote) setdataform({ ...editnote });
  };
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
                handleEdit(id);
              }}
              className="text-blue-500 mt-2"
            >
              Edit
            </button>
          </div>
        ))
      )}
    </div>
  );
}
