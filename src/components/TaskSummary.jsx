import React, { useState } from "react";
import TaskChecklist from "./ToDo";

const TaskToDo = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <TotalTasksDisplay totalTasks={tasks.length} />
    </div>
  );
};

const TotalTasksDisplay = ({ totalTasks }) => {
  return <p>Total Tasks: {totalTasks}</p>;
};

export default TaskToDo;
