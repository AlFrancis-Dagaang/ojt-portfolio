import { useState } from "react";

export default function AddTaskModal({
  show,
  title,
  deadline,
  onTitleChange,
  onDeadlineChange,
  onAdd,
  onClose,
}) {
  const [error, setError] = useState("");

  if (!show) return null;

  const handleAdd = () => {
    if (!title || !deadline) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    onAdd();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Add Task</h3>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-3 p-2 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Task title"
          className="w-full border p-2 mb-3 rounded"
          value={title}
          onChange={(e) => {
            onTitleChange(e.target.value);
            setError("");
          }}
        />

        <input
          type="date"
          className="w-full border p-2 mb-4 rounded"
          value={deadline}
          onChange={(e) => {
            onDeadlineChange(e.target.value);
            setError("");
          }}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setError("");
              onClose();
            }}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
