import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Data from './data';
import TodoApp from './components/TodoApp'



const tileContent = ({ activeStarDate, date, view }) => {
  return Data.map((el) => {
    const datum = new Date(el.date);
    const naam = el.name.slice(0, 1);
    return view === "month" &&
      date.getDate() === datum.getDate() &&
      date.getMonth() === datum.getMonth() ? (
      <p style={{ backgroundColor: "blue", color: "white" }}>{naam}</p>
    ) : null;
  });
};
function App() {
  const [value, setValue] = useState(new Date());
  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  function onChange(nextValue) {
    setValue(nextValue);
  }



  
  return (
    <div className="App">
      <Calendar className="Calendar" tileContent={tileContent} value={value} onClickDay={toggle} />
      {
        toggleState === "off" ? null  : <TodoApp />
      }
    
    </div>
  );
}
export default App;