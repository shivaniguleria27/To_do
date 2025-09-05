
import { FaTrash } from "react-icons/fa";
export default function TaskList({ task }) {
   if (!task || task.length === 0) {
    return (
      <p className="text-gray-500 text-center w-full py-4">
        No tasks yet. Create one!
      </p>
    );
}

  return (
    <>
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {task.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition"
        >
          {/* Task text */}
          <span className="text-gray-800 font-medium">{item}</span>

          {/* Delete button (not wired yet) */}
          <button
            className="text-red-500 hover:text-red-700 transition"
            onClick={() => console.log("delete", index)} // you can pass delete function here
          >
            <FaTrash size={16} />
          </button>
        </li>
      ))}
    </ul>
    </>
  );
}
