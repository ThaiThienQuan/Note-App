import { useCallback, useMemo, useState } from "react";
import type { Note } from "../types/note";
import { v4 as uuidv4 } from "uuid";
interface Props {
  search: string;
  setsearch: React.Dispatch<React.SetStateAction<string>>;
  addNote: (note: Note) => void;
}
export default function NoteForm({ addNote, search, setsearch , }: Props) {
  const [dataform, setdataform] = useState({
    title: "",
    content: "",
    price: 0,
    available: false,
  });
  const editNote=(editnote)=>{
setdataform(dataform.)
  }
  const handleSearch = useCallback((e) => {
    setsearch(e.target.value);
  }, []);
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setdataform((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }, []);
  const handleSubmit = (e) => {
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
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className={`p-2 mb-3 border`}
          type="text"
          value={search}
          placeholder="Search here"
          onChange={handleSearch}
        />
        <br />
        <input
          className={`p-2 mb-3 border`}
          type="text"
          value={dataform.title}
          placeholder="Name here"
          name="title"
          onChange={handleChange}
        />
        <br />
        <textarea
          value={dataform.content}
          placeholder="Content"
          onChange={handleChange}
          name="content"
          className={`p-2 mb-3 border`}
        ></textarea>
        <br />
        <input
          type="text"
          name="price"
          value={dataform.price}
          onChange={handleChange}
          className={`p-2 mb-3 border`}
        />
        <br />
        <input
          type="checkbox"
          name="available"
          checked={dataform.available}
          onChange={handleChange}
          className={`p-2 mb-3 border`}
        />{" "}
        Available for sale?
        <br />
        <button className={`bg-primary text-light p-2 border rounded`}>
          Add Note
        </button>
      </form>
    </>
  );
}
