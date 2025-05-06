import React, { useRef, useState } from "react"
import Task from "./Task"
import TaskList from "./TaskList"

function TaskCreator() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    if (e.key === "Enter"){
      e.preventDefault();
      if (task.trim() !== "") {
        setTasks([...tasks, task])
        setTask('');
        console.log(`Tasks: ${tasks.join(", ")}`);
      } else {
        alert("You must write your task")
      }
    }
  }

  return (
    <>
      <div className="container mt-5 ">
        <div className="d-flex flex-column align-items-center">
        <h1 className="text-light fw-lighter ">TODOS</h1>
          <input
            id="taskInput"
            value={task}
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={addTask}
          />
        </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default TaskCreator
