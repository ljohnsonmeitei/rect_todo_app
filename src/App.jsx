import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (tasktoDelete) => {
    setTasks(tasks.filter((task) => task !== tasktoDelete));
  };

  return (
    <div className="TodoApp">
      <h1>TO DO List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App
