import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditTodoForm({ show, handleClose, setTodos, currentTodo }) {
  const [taskName, setTaskName] = useState(currentTodo.taskName);
  const [dueDate, setDueDate] = useState(currentTodo.dueDate);
  const [status, setStatus] = useState(currentTodo.status);

  const handleSubmit = () => {
    setTodos((curr) => {
      let x = [...curr];
      x = x.map((item) => {
        if (item.id === currentTodo.id)
          return {
            id: currentTodo.id,
            taskName,
            dueDate,
            status,
          };
        else
          return item;
      });
      return x;
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-[15px]">
            <label>Task Name:</label>
            <input
              type="text"
              value={taskName}
              className="border border-black ms-3 px-2"
              placeholder="Task Name"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="mt-[30px]">
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(new Date(e.target.value).toISOString().split("T")[0])
              }
              className="border border-black ms-4 px-2"
            />
          </div>
          <div className="mt-[30px]">
            <label>Status:</label>
            <select
              className="border border-black ms-5 px-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodoForm;
