import Task from "./Task";

const Tasks = ({tasks}) => {
    return (
        <>   {/*Using key! unique keys for array children in React.js*/}
            {tasks.map((t) => (<Task key={t.id} text={t.text}/>))}
        </>
    )
}

export default Tasks;