import React, { useState } from 'react';
import TaskList from "../TaskList"
import "./index.css"

const Task = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setList([...list, task])
    }

    console.log(list)

    return (
        <div className="hola">
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                />
                <button
                    onClick={handleClick}
                >
                    Agregar
                </button>
            </form>
            <ul>
                {
                    (list.length > 0) && (
                        list.map(item => <TaskList task={item} />)
                    )
                }

            </ul>
        </div>
    )
}



export default Task 