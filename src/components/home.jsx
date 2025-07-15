import { useState } from "react";

import AddNewTodoForm from "./addNewTodoForm";
import TodoItem from "./todoItem";

function Home() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTodo = (todo) => {
    setTodos((curr) => curr.filter(x => JSON.stringify(x) !== JSON.stringify(todo)));
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-[50px]">
      <p className="text-2xl font-semibold text-red-500">To Do List</p>
      <button className="mt-4 border-none bg-red-500 text-white px-[16px] py-[12px]" onClick={handleShow}>
        Add Todo
      </button>
      <AddNewTodoForm show={show} handleClose={handleClose} setTodos={setTodos} />
      {
        todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} deleteTodo={deleteTodo} setTodos={setTodos} />
        ))
      }
    </div>
  );
}

export default Home;
