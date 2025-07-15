import { useState } from "react";

import EditTodoForm from "./editTodoForm";

function TodoItem({ todo, deleteTodo, setTodos }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={`mt-[50px] w-[80%] font-medium mx-auto p-[10px] min-h-[100px] flex flex-row justify-around ${
          todo.status === "Pending" ? "bg-yellow-400" : "bg-green-400"
        }`}
      >
        <div className="w-[50%] pl-5 flex flex-col justify-around">
          <p>Task Name: {todo.taskName}</p>
          <p>Due Date: {todo.dueDate}</p>
          <p>Status: {todo.status}</p>
        </div>
        <div className="w-[50%] flex flex-col gap-y-3">
          <button
            className="w-[30%] px-[16px] py-[12px] bg-black text-white self-end"
            onClick={() => deleteTodo(todo)}
          >
            Delete
          </button>
          <button className="w-[30%] px-[16px] py-[12px] bg-black text-white self-end" onClick={handleShow}>
            Edit
          </button>
        </div>
        <EditTodoForm show={show} handleClose={handleClose} setTodos={setTodos} currentTodo={todo} />
      </div>
    </>
  );
}

export default TodoItem;
