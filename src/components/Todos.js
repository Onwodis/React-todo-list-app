import React from "react";

const Todos = ({ text, setTodos, todos, todo, done, setDone, key,dona}) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  const doneHandler = (e) => {
    e.preventDefault();
    const newga = (todos.filter((el) =>  el.id === todo.id ))[0]
    var bg = (newga.completed)
    if(!(newga.completed)){
      newga.completed = true
      newga.dona = "Completed"
      setTodos([...todos])
      console.log("Element with id "+ newga.id + " is " +bg)
    }
    else{
      newga.completed = false
      newga.dona = "Done"
      setTodos([...todos])
      console.log("Element with id " + newga.id + " is " + bg)
    }
    
  }

  return (
    <div className="flex-container">
      {/* <div className="todo-item">
        
      </div>

      <div className="done-btn">
        
      </div> */}

      <li className="todo-items">{text}</li>
      <i className="fa-solid fa-trash del-btn" onClick={deleteHandler}></i>
      <button onClick={doneHandler} className="complete-btn" type="submit" key={key}>
        {dona}
      </button>
    </div>


  );
};

export default Todos;
