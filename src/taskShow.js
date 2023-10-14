import { useState } from "react";
import FormComp from "./formComp";


function TaskShow({task,onDelete,onEdit}) {

const [edit, setEdit] = useState(false);

const handleDelete = () =>{
    onDelete(task.id);
}

const handleChanger = () =>{
setEdit(!edit);
}

const handleSubmitChanger = (id,updatedTitle, updatedDesc) =>{
    setEdit(!edit);
    onEdit(id,updatedTitle, updatedDesc)

    }


return (
<div className="flex flex-col border-solid border-2 border-indigo-600 p-5">

    {edit ? (<FormComp task={task} formTaskEdit= {true} onEdit={handleSubmitChanger}/>):  (<div>
    <h1 className="capitalize pt-2 font-bold">{task.title}</h1>
    <p className="p-3 font-semibold">{task.desc}</p>
    <div className="space-x-5">
        <button onClick={handleDelete} className="rounded-md  bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
        <button onClick={handleChanger}className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Duzenle</button> 
    </div>
    </div>)}

    </div>)

}

export default TaskShow;