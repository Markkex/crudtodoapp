import React from "react";

const TodoItem = ({todo, onHandleEditClick, onHandleDeleteClick}) => {
  return (
    <li key={todo.id}>
      {todo.text}
      {/* we are passing the entire todo object to the handleEditClick function*/}
      <button onClick={() => onHandleEditClick(todo)}>Edit</button>
      <button onClick={() => onHandleDeleteClick(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
