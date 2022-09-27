import React from "react";
import "./Form.css";

const Form = ({ setInputText, setTodos, inputText, todos ,setDone ,done}) => {
  //Things I need to do here
  //Get Input value
  // var completed =[] ;
  // var uncomp ;
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
        { text: inputText, completed: false, id: key ,dona: "Done" }
    ])
    setInputText("")
    // setDone(done)
  }
  const statusHandler = (e) => {
    e.preventDefault();
    var gboy = e.target.value
    // alert('un')
    if(gboy === "completed"){
      const completed = todos.filter((el) => el.completed === true)
      setTodos([...completed])
      console.log("You clicked Completed")
      // completed = todos.map(function bella (el){
      //   var comp = []
      //   if(el.completed === true){
      //     comp.push(el)
      //     console.log("this is comp elements "+comp)
      //     return comp


      //   }else{
      //     return comp

      //   }

        

      // })
      // console.log(completed)

      
      // setTodos([...completed])
      // console.log("You clicked Completed")
    }
    else if (gboy === "uncompleted"){
      const uncompleted = todos.filter((el) => el.completed === false)
      setTodos([...uncompleted])
      console.log("You clicked unCompleted")
    }
    else{
      setTodos([...todos])
      console.log("You clicked All")

    }

    // setDone(done)
  }
  


  return (
    <form>
      <div className="form-container">
        <div className="form-control textfield">
          <input className="inputg" placeholder="Enter Task" value={inputText} onChange={inputTextHandler} type="text" name="todo-text" />
          <button className="add-btn add-todo-btn" type="submit" onClick={submitTodoHandler}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="select-container textfield">
          <select className="filter-todo" onChange={statusHandler}>
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
