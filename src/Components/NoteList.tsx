import type { Note } from "../types/note";

interface Props {
  notes: Note[];
  deleteNote: (id: string) => void;
}

export default function NoteList({ notes, deleteNote }: Props) {
  return (
    <div>
      {notes.length == 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className="border p-3 mb-2 rounded shadow-sm bg-gray-50"
          >
            <h2 className="font-bold">{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.price}</p>
            <strong>
              <small>{new Date(note.createAt).toString()}</small>
            </strong>
            <button
              onClick={() => {
                deleteNote(note.id);
              }}
              className="text-red-500 mt-2"
            >Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
