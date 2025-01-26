import React from 'react'
import Task from './Task';

const TaskList = ({tasks, deleteTask}) => {
  return (
    <ul>
        {tasks.map((task, index) =>(
            <Task key={index} task={task} deleteTask={deleteTask} />
        ))}
    </ul>
  );
}

export default TaskList;