import React from "react";
import "./index.css";
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ isComplete, onClick }) => {
  return (
    <button className="icon">
      {(isComplete) ? (
        <FontAwesomeIcon icon={faCheck} className="check-button" onClick={onClick} />
      ) : (
          <FontAwesomeIcon icon={faTrash} className="delete-button" onClick={onClick} />
        )}
    </button>
  )
}

export default Button