import type { Note } from "../types/note";
interface Props {
  deleteNote: (note: Note) => void;
}
export default function NoteList({deleteNote}:Props){
    deleteNote();
    return(<></>)
}