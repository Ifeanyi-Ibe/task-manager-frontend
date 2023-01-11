import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Task = (props) => {
    const { task } = props;
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <div className="task-details">
                <input type="checkbox" className="check" />
                <FaTrashAlt className="trash-icon" />
            </div>
        </div>
    );
}

export default Task;