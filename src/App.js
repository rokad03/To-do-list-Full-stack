import React, { useState } from "react";
import axios from "axios"
import Task from "./Task";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    task:""
  });
  const addTask = () => {
   
      setTasks([...tasks, newTask]);
      setNewTask("");
    
    const {task}=newTask
    if(task){
      axios.post("http://localhost:3001/task",newTask)
      .then(res=>console.log(res))
      alert("user registered successfully");
    }
    else
    {
        alert("invlaid Input");
    }


  };
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleChange=(e)=>{
    const {name,value}=e.target
    setNewTask({
      ...newTask,
      [name]:value,
    })

  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "blue",
        }}
      >
        To -Do List
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Adda new task"
          name="task"
          value={newTask.task}
          onChange={handleChange}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
        }}
      >
        {tasks.map((task, index) => (
          <Task key={index} text={task.task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}
export default App;
