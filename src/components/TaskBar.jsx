import React, { useState } from "react";


const TaskBar = (task, removeTask, updateTask, assignTask) => {
    const [editData, setEditData] = useState({ editing: false, newName: '' });
    const handleUpdate = () => {
        updateTask(task.id, editData.newName);
        setEditData({ editing: false, newName: '' });
      };
    
      const handleAssign = () => {
        assignTask(task.id, task.assignee);
      };
    
  return (
    <>
    <div className="p-4 md:w-1/2 w-full">
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      {editData.editing ? (
        <input
          type="text"
          value={editData.newName}
          onChange={e => setEditData({ ...editData, newName: e.target.value })}
          className="border border-gray-300 rounded py-1 px-2"
        />
      ) : (
        <p>{task.name}</p>
      )}
      <div>
        {editData.editing ? (
          <>
            <button onClick={handleUpdate} className="bg-blue-500 text-white rounded px-2 py-1">Update</button>
            <button onClick={() => setEditData({ editing: false, newName: '' })} className="bg-gray-500 text-white rounded px-2 py-1 ml-2">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditData({ editing: true, newName: task.name })} className="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            {task.assignee ? (
              <p key={task.assignee} className="mt-2">Assigned to: {task.assignee}</p>
            ) : (
              <>
                <input
                  type="text"
                  value={task.assignee}
                  className="border border-gray-300 rounded py-1 px-2 ml-2"
                  placeholder="Assignee name"
                />
                <button onClick={handleAssign} className="bg-purple-500 text-white rounded px-2 py-1 ml-2">Assign</button>
              </>
            )}
          </>
        )}
        <button onClick={() => removeTask(task.id)} className="bg-red-500 text-white rounded px-2 py-1 ml-2">Delete</button>
      </div>
    </div>
    </div>
    </>

  );
}

export default TaskBar;
