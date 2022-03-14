import Header from "./components/Header";
import Task from "./components/Tasks";
import { useState } from 'react';


function App() {
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: 'TODO TODAY'
      },
      {
        id: 2,
        text: 'TODO TOMOROW'
      },
      {
        id: 3,
        text: 'TODO NOW NOW NOW'
      },
      {
        id: 4,
        text: 'TODO WHAAAT ???'
      }
    ]
  )

  //Delete task
  const deleteById = (id) => {
    console.log('Delete', id)
    setTask(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    console.log('Toggle', id)
  }

  return (
    <div className='container'>
      {/* We can pass arguments(props) into our component*/}
      <Header title='Hey' />
      <Task tasks={tasks} deleteTask={deleteById} reminder = {toggleReminder} />
    </div>
  );
}

export default App;
