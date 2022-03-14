import Task from "./Task";

const Tasks = ({ tasks, deleteTask, reminder }) => {
    return (
        <>   {/*Using key! unique keys for array children in React.js*/}
            {tasks.map((t) =>
            (<Task key={t.id} task={t}
                deleteTask={deleteTask}
                reminder={reminder}
            />))}
        </>
    )
}

export default Tasks;