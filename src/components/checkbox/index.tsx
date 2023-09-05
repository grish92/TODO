import React, { ChangeEvent, FC } from "react";
import "./index.css";

interface ICheckbox {
  name: string;
  label: string;
  checked: boolean;
  onChange: (label: string) => void;
}
export const Checkbox: FC<ICheckbox> = (props) => {
  const { name, label, checked, onChange } = props;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onChange(label);
    }
  };
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="check__task"
        />
        {name}
      </label>
    </>
  );
};
