import { useState, useEffect } from "react";
import AddTaskModal from "../components/AddTaskModal";
import StatusLegend from "../components/StatusLegend";

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("deletedTasks")) || [];
  });

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");


  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);



  const addTask = () => {
    if (!title || !deadline) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        deadline,
        done: false,
      },
    ]);

    setTitle("");
    setDeadline("");
    setShowModal(false);
  };

  const markDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setDeletedTasks([...deletedTasks, task]);
  };

    const getStatusColor = (task) => {
        const now = new Date();
        const deadlineDate = new Date(task.deadline + "T23:59:59");
        const diff = deadlineDate - now; // milliseconds until deadline

        const oneDay = 1000 * 60 * 60 * 24;
        const threeDays = oneDay * 4;

        if (task.done) return "bg-green-500";        // Done
        if (diff < 0) return "bg-red-500";          // Late (past deadline)
        if (diff <= threeDays) return "bg-yellow-400"; // Near deadline (3 days before)
    return "bg-gray-300";                        // Neutral
    };


  const todoTasks = tasks.filter((t) => !t.done);
  const doneTasks = tasks.filter((t) => t.done);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className=" text-black text-center py-12 text-4xl font-bold">
        Todo App
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Legend</h3>
            <StatusLegend />
        </div>
      </div>
      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          
            + Add Task
          </button>
        </div>

        {/* TODO */}
        {todoTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            color={getStatusColor(task)}
            onDone={() => markDone(task.id)}
            onDelete={() => deleteTask(task)}
          />
        ))}

        {/* DONE */}
        {doneTasks.length > 0 && (
          <>
            <h3 className="mt-8 mb-2 font-semibold">Completed ▲</h3>
            {doneTasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                color="bg-green-500"
                onDone={() => markDone(task.id)}
                onDelete={() => deleteTask(task)}
              />
            ))}
          </>
        )}

        {/* DELETED */}
        {deletedTasks.length > 0 && (
          <>
            <h3 className="mt-8 mb-2 font-semibold">Deleted</h3>
            {deletedTasks.map((task) => (
              <div
                key={task.id}
                className="p-4 mb-2 bg-gray-200 rounded opacity-60"
              >
                {task.title}
              </div>
            ))}
          </>
        )}
      </div>
      <AddTaskModal
        show={showModal}
        title={title}
        deadline={deadline}
        onTitleChange={setTitle}
        onDeadlineChange={setDeadline}
        onAdd={addTask}
        onClose={() => setShowModal(false)}
      />

      
    </div>
  );
}


function TaskRow({ task, color, onDone, onDelete }) {
  return (
    <div className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{task.title}</p>
        <p className="text-sm text-gray-500">{task.deadline}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onDone}
          className="
            text-sm px-3 py-1 bg-gray-100 rounded
            cursor-pointer
            hover:bg-green-200
            transition-colors duration-200
          "
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button
          onClick={onDelete}
          className="
            text-sm px-3 py-1 bg-gray-100 rounded
            cursor-pointer
            hover:bg-red-200
            transition-colors duration-200
          "
        >
          Delete
        </button>

        <span className={`w-4 h-4 rounded-full ${color}`} />
      </div>
    </div>
  );
}
