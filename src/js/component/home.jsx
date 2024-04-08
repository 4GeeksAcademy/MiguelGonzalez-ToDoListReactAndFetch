import React, { useState, useEffect } from 'react';
import '../../styles/index.css';
import createTask from '../../utils/createTask';
import createUser from '../../utils/createUser';
import getTasks from '../../utils/getTasks';
import deleteTask from '../../utils/deleteTask';

function Home({ style }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const handleChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    };
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([...tasks, {label:newTask, is_done: false}]);
        setNewTask('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };

    useEffect(() => {
        createUser()
        getTasks()
    }, []);
    useEffect(() => {    
        if (tasks.length > 0) {
            createTask({label:newTask, is_done: false})
        }
        console.log(tasks);
    }, [tasks]);
    useEffect(() => {
        
    })

    return (
      <div className={`ToDoContainer ${style}`}>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks, add a new task!</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.label}
                <span className="delete" onClick={() => deleteTask(index)}>
                  &#10006;
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default Home;