import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './component/home.jsx';

// Include your styles into the webpack bundle
import "../styles/index.css";

// Render your react application
ReactDOM.render(
  <div>
    <h1 className="title">To Do List</h1>
    <ToDoList />
  </div>,
  document.querySelector("#app")
);
