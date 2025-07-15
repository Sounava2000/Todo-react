import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddNewTodoForm({ show, handleClose, setTodos }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [status, setStatus] = useState("Pending");

  const handleSubmit = () => {
    setTodos((curr) => [
      ...curr,
      {
        id: uuidv4(),
        taskName,
        dueDate,
        status,
      },
    ]);
    setTaskName("");
    setDueDate(new Date().toISOString().split("T")[0]);
    setStatus("Pending");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Todo</Modal.Title>
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

export default AddNewTodoForm;
