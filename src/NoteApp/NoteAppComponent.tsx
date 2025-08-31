import { useCallback, useEffect, useState } from "react";
import type { Note } from "../types/note";
import NoteForm from "../Components/NoteForm";
import NoteList from "../Components/NoteList";
import { NotePorvider } from "../Components/NoteContext";
export default function NoteAppComponent() {
  const [notes, setnote] = useState<Note[]>(() => {
    const save = localStorage.getItem("notes");
    return save ? JSON.parse(save) : [];
  });
  const [newnote, setnewnote] = useState({
    name: "",
    email: "",
    checked: false,
  });
  useEffect(() => {localStorage.setItem("notes",JSON.stringify(notes))}, [notes]);
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setnewnote((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const addNote = (note:Note) => {
    setnote([note, ...notes]);
  };
  const deleteNote = (id: string) => {
    setnote(notes.filter((i) => i.id !== id));
  };
  return (
    <>
       <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📒 Note App</h1>
      
        <NoteForm />
        <NoteList />
      </div>
    </>
  );
}
