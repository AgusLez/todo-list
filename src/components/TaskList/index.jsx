import React from "react";
import Button from "../Button" 

const TaskList = ({task}) => {
    return (
        <li className="taskList"> {task} 
        <div className="iconContainer">
        <Button isComplete={true}/> <Button isComplete={false}/> </div>
        </li>
    )
}


export default TaskList