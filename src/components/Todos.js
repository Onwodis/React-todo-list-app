import React from "react";

const Todos = ({ text, setTodos, todos, todo }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.text !== todo.text))
  }

  return (
    <div className="flex-container">
      <div className="todo-item">
        <li className="todo-items">{text}</li>
        <i className="fa-solid fa-trash del-btn" onClick={deleteHandler}></i>
      </div>
      
      <div className="done-btn">
        <button className="complete-btn" type="submit">
          Done
        </button>
      </div>
    </div>
  );
};

export default Todos;
