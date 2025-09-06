import { useCallback, useEffect, useMemo, useState } from "react";
import type { Note } from "../types/note";
import NoteForm from "../Components/NoteForm";
import NoteList from "../Components/NoteList";
export default function NoteAppComponent() {
  const [notes, setnote] = useState<Note[]>(() => {
    const save = localStorage.getItem("notes");
    return save ? JSON.parse(save) : [];
  });
  const [search, setsearch] = useState("");
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addNote = useCallback((note: Note) => {
    setnote([note, ...notes]);
  }, []);
  const deleteNote = useCallback((id: string) => {
    setnote(notes.filter((i) => i.id !== id));
  }, []);
  const filterNote = useMemo(() => {
    return notes.filter((i) =>
      `
    ${i.id} 
    ${i.title} 
    ${i.content} 
    ${i.price} 
    ${i.available ? "Saved" : "Not save"} 
    ${i.createAt} 
    `.includes(search.toLowerCase())
    );
  }, [search, notes]);
  return (
    <>
      <div className={`p-5 max-w-3xl mx-auto`}>
        <h1 className={`text-2xl font-bold mb-4`}>📒 Note App</h1>
        <NoteForm addNote={addNote} search={search} setsearch={setsearch}/>
        <NoteList
          notes={notes}
          filterNote={filterNote}
          deleteNote={deleteNote}
        />
      </div>
    </>
  );
}
