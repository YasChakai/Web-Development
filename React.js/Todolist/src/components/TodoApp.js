import React, { useState } from "react";
import "./TodoApp.css";




function TodoApp() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
    console.log(val.target.value);
  }
  
  const addListHandler = (event) => {};
  return (
    <div className="TodoList">
      <h1 className="TodoList_title">ToDolist</h1>
      <input onChange={getData} type="text"></input>
      <button className="btn" onClick={() => setPrint(true)}>
        Add task to my ToDolist
      </button>
      {print ? (
        <p className="TodoList_items">
          <input className="checkbox" type="checkbox" />
          {data}
          <button>x</button>
        </p>
      ) : null}
        
      
  
    </div>
  );
}

export default TodoApp;