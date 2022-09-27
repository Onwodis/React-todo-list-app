import React from "react";
import "./TodoList.css";
import Todos from "../components/Todos";

const TodoList = ({ todos, setTodos ,done ,setDone}) => {

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todos
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
            completed={todo.completed}
            dona={todo.dona}
            setDone={setDone}
            done={done}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
