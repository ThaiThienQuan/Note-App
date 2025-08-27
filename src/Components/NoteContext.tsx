import {createContext, useState} from "react";

const NoteContext=createContext({addNote:()=>{}});
export const NotePorvider=({children})=>{
    const [note, setNote] = useState()
    const addNote=()=>{}
    const deleteNote=(i)=>{}
    <NoteContext.Provider value={{addNote(),delete()}}>{children}</NoteContext.Provider>
}
export default NoteContext;
