import { useState } from "react";
import type { Note } from "../types/note";

interface Props {
  notes: Note[];
  deleteNote: (id: string) => void;
  updateNote: (id: string, updateNote: Note) => void;
  filterNote: Note[];
}

export default function NoteList({ notes, deleteNote, filterNote }: Props) {
  const [editId, seteditId] = useState<string | null>(null);
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");
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
              <></>
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
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
