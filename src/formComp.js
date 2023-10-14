import { useState } from "react";


function FormComp({onCreate,task,formTaskEdit,onEdit}) {

const [title, setTitle] = useState(formTaskEdit ? task.title : "");

const [desc, setDesc] = useState(formTaskEdit ? task.desc : "");

const titleCapture = (event) =>{
   setTitle(event.target.value);

}
function descCapture(event) {
    setDesc(event.target.value);
    
}
function handleSubmit(event) {
    event.preventDefault();
    formTaskEdit ? onEdit(task.id,title,desc) : onCreate(title,desc);
    setDesc('');
    setTitle('');
    
}

return ( 
    <div>
    
        {formTaskEdit ? (<div className="edit-formm">
        <form className="create-form" >
        <label>Baslik Duzenle</label>
        <input type="text" value={title} onChange={titleCapture} />
        <label>Gorev Duzenle</label>
        <input type="text" value={desc} onChange={descCapture} />
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Duzenle</button>
        </form></div>) : 

        (<div className="divv-form">
            <form className="create-form" >
                <label>Baslik Gir</label>
                <input type="text" value={title} className="block w-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={titleCapture} />
                <label>Gorev Gir</label>
                <input type="text" value={desc} className="block w-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={descCapture} />
                <button className="bg-transparent my-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleSubmit}>Submit</button>
            </form>
        </div>)}
           
     </div>);
        
    
}


export default FormComp;