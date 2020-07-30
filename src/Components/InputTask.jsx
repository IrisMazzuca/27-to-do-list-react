import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';


const InputTask = ({ action }) => {
    const [task, setTask] = useState("");
    return (
        <div>
            <h1 className="title"> To Do List </h1>

            <input className="inputTask"
                type="text"
                onChange={(event) => setTask(event.target.value)}
                name="input-task"
                placeholder="Ingrese una tarea"
                value={task} />

            <FaPlusCircle
                className="plusIcon"
                title="Agregar"
                onClick={() => {
                    action(task);
                    setTask("");
                }
                } />
        </div>
    )
}

export default InputTask

