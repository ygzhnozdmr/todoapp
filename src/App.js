
import './App.css';
import FormComp from './formComp';
import CreatedTasks from './createdTasks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [tasks, setTasks] = useState([]);
const formSubmit = async(title,desc) => {
  const response = await axios.post('http://localhost:3000/tasks',{
    title,
  desc });
  console.log(response);
  const createdTaskss = [...tasks,response.data];
  setTasks(createdTaskss);
};
const getTasks= async()=>{
  const response = await axios.get('http://localhost:3000/tasks');
  setTasks(response.data);
 } 

useEffect(() => {getTasks()}, [])


const deleteFunction = async (id) => {
await axios.delete(`http://localhost:3000/tasks/${id}`);
const afterDeletingTasks = tasks.filter((task)=>{
  return task.id !== id ;
})
setTasks(afterDeletingTasks);
};

const editFunction = async(id,updatedTitle, updatedDesc) => {
 await axios.put(`http://localhost:3000/tasks/${id}`,{
    title :updatedTitle,
    desc : updatedDesc,
  })
  const afterEditingTasks = tasks.map((task)=>{
  if(task.id === id){
    return { id, title:updatedTitle,desc:updatedDesc};
  }
  else{return task;}

})
  setTasks(afterEditingTasks);
  }


  return (
    <div className="App">
      <div className='flex flex-row justify-center items-center'> 
      <FontAwesomeIcon icon={faBarsProgress} className='h-8 mr-2 text-sky-500' />    
      <h1 className='text-4xl'>Todo App</h1>
      </div>
 
    <br/>
  <h3 className='text-xl'>Create Tasks</h3>
  <br/>
    <FormComp className="flex flex-col" onCreate={formSubmit} />
  <h3>Tasks To Do</h3>
    <CreatedTasks tasks={tasks} className="task-created" onDelete={deleteFunction} onEdit={editFunction} />

    </div>
  );
}

export default App;
