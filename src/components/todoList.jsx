import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

export default function TaskList({ task, onToggle }) {
  if (!task || task.length === 0) {
    return (
      <p className="text-gray-500 text-center w-full py-4">
        No tasks yet. Create one!
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {task.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition"
        >
          <span className={item.completed ? "line-through text-gray-500" : ""}>
            {item.description}
          </span>

          <button
            onClick={() => onToggle(index)}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            {item.completed ? (
              <MdCheckBox size={24} />
            ) : (
              <MdCheckBoxOutlineBlank size={24} />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
