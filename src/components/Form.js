import React from "react";
import "./Form.css";

const Form = ({ setInputText, setTodos, inputText, todos }) => {
  //Things I need to do here
  //Get Input value
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  let key = Math.floor((Math.random() + 1) * 10000)
  //We will display a text, completed, uncompleted, id, 

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        { text: inputText, completed: false, id: key }
    ])
    setInputText("")
  }


  return (
    <form>
      <div className="form-container">
        <div className="form-control textfield">
          <input value={inputText} onChange={inputTextHandler} type="text" name="todo-text" />
          <button className="add-btn" type="submit" onClick={submitTodoHandler}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="select-container textfield">
          <select className="filter-todo">
            <option value="all">All</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
