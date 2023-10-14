import TaskShow from "./taskShow"
function CreatedTasks({tasks, onDelete,onEdit}) {
    
 return (
    <div className="task-all">
    {tasks.map((task,index)=> {
        return <TaskShow task={task} key={index} onDelete={onDelete} onEdit={onEdit}  />;
     })}
    </div>
    );
 

    
}
export default CreatedTasks