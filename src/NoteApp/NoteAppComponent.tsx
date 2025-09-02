import { useCallback, useEffect, useState } from "react";
import type { Note } from "../types/note";
import NoteForm from "../Components/NoteForm";
import NoteList from "../Components/NoteList";
export default function NoteAppComponent() {
  const [notes, setnote] = useState<Note[]>(() => {
    const save = localStorage.getItem("notes");
    return save ? JSON.parse(save) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = useCallback((note: Note) => {
    setnote([note, ...notes]);
  }, []);
  const deleteNote = useCallback((id: string) => {
    setnote(notes.filter((i) => i.id !== id));
  }, []);
  return (
    <>
      <div className={`p-5 max-w-3xl mx-auto`}>
        <h1 className={`text-2xl font-bold mb-4`}>📒 Note App</h1>
        <NoteForm />
        <NoteList />
      </div>
    </>
  );
}
