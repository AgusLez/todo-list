import React, { useState } from 'react';
import TaskList from "../TaskList"
import "./index.css"

const Task = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const addTask = (e) => {
        if (task === "") {
            e.preventDefault()
            return
        } else {
            e.preventDefault()
            setList([...list, task])
            setTask("")
        }
    }
    const handleDelete = () => setList([])

    return (
        <div className="mainContainer">
            <form className="formContainer">
                <input
                    value={task}
                    className="input"
                    type="text"
                    placeholder="Escribí una tarea"
                    onChange={handleInput}
                />

                <button
                    className="button"
                    onClick={addTask}>
                    +
                </button>
            </form>
            <ul className="taskContainer">
                {
                    (list.length > 0) ? (
                        list.map((task, i) => <TaskList task={task} key={i} />)
                    ) :
                        (
                            <div className="emptyTask">
                                <img src={require("../../Icons/ghost.png")} alt="Fantasma" />
                                <p>Todavía no hay tareas!</p>
                            </div>
                        )
                }

            </ul>

            <button
                className="delete-all"
                onClick={handleDelete}>
                Eliminar todo
            </button>


        </div>
    )
}


export default Task 