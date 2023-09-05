import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { InputButton } from ".";

test("InputButton should render correctly", () => {
  const { getByTestId } = render(
    <InputButton placeholder="Enter a task" value="" onChange={() => {}} />
  );
  const input = screen.getByTestId("input");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");
});

test("InputButton should call onChange when input value changes", () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <InputButton placeholder="Enter a task" value="" onChange={handleChange} />
  );

  const input = screen.getByTestId("input");
  fireEvent.change(input, { target: { value: "New Task" } });
  expect(handleChange).toHaveBeenCalledWith("New Task");
});

test("InputButton should call onButtonClick when button is clicked", () => {
  const onButtonClick = jest.fn();
  const handleChange = jest.fn();

  const { getByTestId } = render(
    <InputButton
      placeholder="Enter a task"
      value=""
      onButtonClick={onButtonClick}
      onChange={handleChange}
    />
  );

  const button = screen.getByTestId("add-button"); // Select the button by data-testid
  fireEvent.click(button);

  expect(onButtonClick).toHaveBeenCalled();
});
