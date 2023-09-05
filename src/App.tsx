import React, { useState } from "react";
import "./App.css";
import { Checkbox, InputButton, TaskList } from "./components";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({
    showCompleted: false,
    showIncompleted: false,
    showAll: false,
  });
  const handleCheckboxChange = (label: string) => {
    const updatedCheckboxes = { ...checkboxes };

    for (const key in updatedCheckboxes) {
      if (key === label) {
        updatedCheckboxes[key] = true;
      } else {
        updatedCheckboxes[key] = false;
      }
    }

    setCheckboxes(updatedCheckboxes);
  };

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="input__container">
          <InputButton
            placeholder="Enter a task"
            value={taskText}
            onChange={(newValue) => setTaskText(newValue)}
            buttonLabel="+"
            onButtonClick={addTask}
          />
        </div>
        <div className="checkboxes">
          <Checkbox
            label="showCompleted"
            name="Show Completed"
            checked={checkboxes.showCompleted}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="showIncompleted"
            name="Show Incompleted"
            checked={checkboxes.showIncompleted}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="showAll"
            name="Show All"
            checked={checkboxes.showAll}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="task__list">
          <TaskList
            tasks={tasks}
            filterType={
              checkboxes.showCompleted
                ? "completed"
                : checkboxes.showIncompleted
                ? "incompleted"
                : "all"
            }
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
