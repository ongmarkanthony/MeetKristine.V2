import { useState } from "react";

const TaskChecklist = ({tasks, setTasks}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Task Checklist</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 mr-2 border border-gray-300 rounded"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded"
            >
              {task}
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks added yet.</p>
      )}
    </div>
  );
};


export default TaskChecklist;
