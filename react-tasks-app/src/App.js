import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTask] = useState([
    {
      id : "1",
      text : "Learning React",
      day : "1 jan 2022"
    },
    {
      id : "2",
      text : "Learning Block Chain",
      day : "2 jan 2022"
    },
    {
      id : "3",
      text : "Go to fitness",
      day : "3 jan 2022"
    }
  ]);

  return (
    <div className="container">
      <Header title='Hello '/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
