import React, { FC } from "react";
import remove from "./../../assets/remove.svg";
import "./index.css";
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  filterType: "completed" | "incompleted" | "all";
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList: FC<TaskListProps> = (props) => {
  const { tasks, filterType, onToggleTask, onDeleteTask } = props;
  const filteredTasks =
    filterType === "completed"
      ? tasks.filter((task) => task.completed)
      : filterType === "incompleted"
      ? tasks.filter((task) => !task.completed)
      : tasks;

  return (
    <>
      <h2>
        {filterType === "completed"
          ? "Completed Tasks"
          : filterType === "incompleted"
          ? "Incompleted Tasks"
          : "All Tasks"}
      </h2>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed task__item" : "task__item"}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="check__task"
            />
            {task.text}
            <button onClick={() => onDeleteTask(task.id)} className="remove__btn">
              <img src={remove} alt="remove" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
