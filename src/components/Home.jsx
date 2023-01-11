import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Task from './Task'

const Home = () => {
    const [ tasks, setTasks ] = useState(null);
    const [ completed, setCompleted ] = useState(false);

    async function getTasks() {
        const allTasks = await axios.get(`http://localhost:9002/api/tasks`);
        setTasks(allTasks.data.tasks);
    }

    const toggleCompleted = () => {
        setCompleted(!completed);
    }

    useEffect(() => {
        getTasks()
    }, []);

    if(!tasks) return <h1>No tasks found</h1>;

    return (
        <div className="tasks">
            { tasks.map(atask => {
                return <Task key={atask._id} task={atask} handleClick={toggleCompleted} />
            }) }
        </div>
    );
}

export default Home;