import React from "react";
function Task({ text, onDelete }) {
  const taskStyle = {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "2px solid #ccc",
    backgroundColor: "#f9f9f9",
  };
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  };
  return (
    <li style={taskStyle}>
      {text}
      <button onClick={onDelete} style={buttonStyle}>
        Delete
      </button>
    </li>
  );
}
export default Task;
