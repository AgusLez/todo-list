import React from "react";
import Button from "../Button";
import "./index.css";
import { useState } from "react";

const TaskList = ({task}) => {
    const [taskStatus, setTaskStatus] = useState("taskList");

    const handleComplete = () => {
    if (taskStatus !== "taskList") {
        setTaskStatus("taskList") 
    }else {
        setTaskStatus("taskListComplete")
    }
    }
    const handleRemove = () => {
        setTaskStatus ("taskListUncomplete");
    }

    return (
        <li className={taskStatus}> 
        {task} 
        <div className="iconContainer">
        <Button isComplete={true}  onClick={handleComplete} /> 
        <Button isComplete={false} onClick={handleRemove} /> </div>
        </li>
    )
}

export default TaskList