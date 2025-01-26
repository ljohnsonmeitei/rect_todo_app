import React from 'react'

const Task = (task, deleteTask) => {
  return (
    <li>
        {task}
        New task
        <button onClick={() => deleteTask(task)}>Delete</button>
    </li>
  );
}

export default Task;