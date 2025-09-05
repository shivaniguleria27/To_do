import { useState } from "react";
import { AddTask } from "./addTask";
import TaskList from "./todoList";
export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);

  function handleIsopen() {
    setIsOpen(true);
  }
  function handleIsClose() {
    setIsOpen(false);
  }
   function taskHandler(newTask) {
    setTask([...task, newTask]);
  }
    
 
  return (
    <>
      <div className="bg-white rounded-t-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4">
          {/* Create Task button */}
          <button
            onClick={handleIsopen}
            className="rounded-2xl bg-[#05243e] p-2 sm:p-3 md:p-4 text-white w-full sm:w-auto"
          >
            Create Task
          </button>

          {/* Form */}
          {isOpen && <AddTask onClose={handleIsClose}  onSubmit={taskHandler} />}
          <TaskList task={task}/>
        </div>
      </div>
    </>
  );
}
