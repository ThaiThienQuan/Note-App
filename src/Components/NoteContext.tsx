import {createContext, useCallback, useState} from "react";
import type { Note } from "../types/note";

const NoteContext=createContext({notes:'',addNote:()=>{}});
export const NotePorvider=({children})=>{
    const [notes, setNote] = useState()
    const addNote = useCallback((note:Note) => {
        setNote([note, ...notes]);
      },[]);
    const deleteNote=(i)=>{}
    <NoteContext.Provider value={{notes,addNote()}}>{children}</NoteContext.Provider>
}
export default NoteContext;
