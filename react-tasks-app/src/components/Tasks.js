import Task from './Task'

const Tasks = ({ tasks }) => {
  return(
    <>
    {tasks.map((task) => (<h5 key={task.id}>{task.text}</h5>))}
    </>
  );
};

export default Tasks;
