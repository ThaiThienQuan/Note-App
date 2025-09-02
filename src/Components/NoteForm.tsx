import { useCallback, useState } from "react";
import type { Note } from "../types/note";
interface Props {
  addNote: (note: Note) => void;
}
export default function NoteForm() {
  const [title_content, settitle_content] = useState({
    title: "",
    content: "",
    available: false,
  });
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    settitle_content((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const addNote = () => {
    setnote([newnote, ...note]);
    setnewnote({ name: "", email: "", checked: false });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          className={`p-2 mb-3 border`}
          type="text"
          value={title_content.title}
          placeholder="Name here"
          name="title"
          onChange={handleChange}
        />
        <textarea
          value={title_content.content}
          placeholder="Content"
          onChange={handleChange}
          name="content"
          className={`p-2 mb-3 border`}
        ></textarea>
        <input
          type="checkbox"
          name="available"
          checked={title_content.available}
          onChange={handleChange}
          className={`p-2 mb-3 border`}
        />
        <button className={`bg-primary text-light border rounded`}>
          Add Note
        </button>
      </form>
    </>
  );
}
