import { useCallback, useState } from "react";
import type { Note } from "../types/note";
import { v4 as uuidv4 } from "uuid";
interface Props {
 
  addNote: (note: Note) => void;
}
export default function NoteForm({ addNote }: Props) {
  const [dataform, setdataform] = useState({
    title: "",
    content: "",
    price: 0,
    available: false,
  });
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setdataform((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!dataform.title.trim() || !dataform.content.trim()) return;

    const newNote: Note = {
      id: uuidv4(),
      title: dataform.title,
      content: dataform.content,
      price: dataform.price,
      available: false,
      createAt: new Date(),
    };
    addNote(newNote);
    setdataform({ title: "", content: "", price: 0, available: false });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          className={`p-2 mb-3 border`}
          type="text"
          value={dataform.title}
          placeholder="Name here"
          name="title"
          onChange={handleChange}
        />
        <textarea
          value={dataform.content}
          placeholder="Content"
          onChange={handleChange}
          name="content"
          className={`p-2 mb-3 border`}
        ></textarea>
        <input
          type="number"
          name="number"
          value={dataform.price}
          onChange={handleChange}
          className={`p-2 mb-3 border`}
        />
        <input
          type="checkbox"
          name="available"
          checked={dataform.available}
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
