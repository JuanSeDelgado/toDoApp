import React, { useState } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'


function TaskList ({tasks,setTasks}){

    const onDeleteTask = (index) => {    
        const newTasks = [...tasks];
        console.log(newTasks);
       setTasks(newTasks.filter((task, i) => i !== index));
       console.log(newTasks.filter((task, i) => i !== index))
    }

    return(
    <>
        <ul>
            {tasks.map((task, index ) => (           
                <Task key={index} body={task} onDeleteTask={onDeleteTask} index={index}/>
            ))}
        </ul>
    </>
    )
}

TaskList.PropTypes = {
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTasks: PropTypes.func.isRequired,
}

export default TaskList;