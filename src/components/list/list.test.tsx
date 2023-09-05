import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskList } from ".";

const sampleTasks = [
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: true },
];

test("TaskList should render tasks correctly", () => {
  const { getByText } = render(
    <TaskList
      tasks={sampleTasks}
      filterType="all"
      onToggleTask={() => {}}
      onDeleteTask={() => {}}
    />
  );

  expect(screen.getByText("All Tasks")).toBeInTheDocument();
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("TaskList should filter completed tasks", () => {
  const { getByText, queryByText } = render(
    <TaskList
      tasks={sampleTasks}
      filterType="completed"
      onToggleTask={() => {}}
      onDeleteTask={() => {}}
    />
  );

  expect(screen.getByText("Completed Tasks")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
  expect(screen.queryByText("Task 1")).toBeNull();
});
