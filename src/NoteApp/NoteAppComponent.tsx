import { useState } from "react"

export default function NoteAppComponent(){
    const [note, setnote] = useState({
        name:'',
        email:'',
        checked:false
    })
    const handleChange=(e)=>{
        const {name, value , type , checked}=e.target;
setnote((prev)=>({...prev,[name]: type=="checkbox"? checked :value}));
    }
    return(<>
    <div className="">
        <input type="text" value={note.name} placeholder="Name here" name="name" onChange={handleChange}/>
        <input type="checkbox" name="checked" checked={note.checked} onChange={handleChange}/>
    </div>
    </>)
}