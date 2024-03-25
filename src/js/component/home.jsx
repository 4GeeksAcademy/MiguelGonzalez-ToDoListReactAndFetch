import React, { useState } from 'react';
import '../../styles/index.css';

function ToDoList({ style }) {
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
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

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
              {task}
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

export default ToDoList;
