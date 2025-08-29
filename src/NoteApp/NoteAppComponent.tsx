import { useCallback, useState } from "react";
import type { Note } from "../types/note";
import NoteForm from "../Components/NoteForm";
import NoteList from "../Components/NoteList";
export default function NoteAppComponent() {
  const [note, setnote] = useState<Note[]>(() => {
    const save = localStorage.getItem("notes");
    return save ? JSON.parse(save) : [];
  });
  const [newnote, setnewnote] = useState({
    name: "",
    email: "",
    checked: false,
  });
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setnewnote((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const addNote = () => {
    setnote([newnote, ...note]);
    setnewnote({ name: "", email: "", checked: false });
  };
  const deleteNote =(index)=>{
    setnote(note.filter((i)=>i.id!==index.id))
  };
  return (
    <>
      <div className="">
        <NoteForm />
        <NoteList />
      </div>
    </>
  );
}
