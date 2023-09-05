import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Checkbox } from ".";

test("Checkbox should render correctly", () => {
  const { getByLabelText } = render(
    <Checkbox
      label="showCompleted"
      name="Show Completed"
      checked={false}
      onChange={() => {}}
    />
  );

  const checkbox = screen.getByLabelText("Show Completed");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});

test("Checkbox should call onChange when clicked", () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render(
    <Checkbox
      label="showCompleted"
      name="Show Completed"
      checked={false}
      onChange={handleChange}
    />
  );

  const checkbox = screen.getByLabelText("Show Completed");
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledWith("showCompleted");
});
