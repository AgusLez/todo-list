import React from "react";
import "./index.css"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({isComplete}) => {
  return (
    <button className="icon">
      {(isComplete === true) ? (
        <svg className="check-button" src={require("../../Icons/checkmark.svg")} alt="complete"/>
      ) : (
        <img className="delete-button" src={require("../../Icons/trashcan.svg")} alt="delete"/>
        //<span style="font-size: 3em; color: Tomato;"><i className="fas fa-trash"></i></span>
      )}
    </button>
  )
}

export default Button

