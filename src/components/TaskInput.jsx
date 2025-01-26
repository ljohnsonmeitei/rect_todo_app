import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
    const [input,setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleAddTask = () => {
        if (input) {
            addTask(input);
            setInput("");
        }
    }
  return (
    <div>
        <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="please insert new task" />
        <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskInput;