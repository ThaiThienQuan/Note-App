import { useCallback, useState } from "react";

export default function NoteForm() {
  const [note, setnote] = useState([]);
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
    setnote([newnote,...note]);
    setnewnote({name: '', email: '',checked:false})
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          value={newnote.name}
          placeholder="Name here"
          name="name"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="checked"
          checked={newnote.checked}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
