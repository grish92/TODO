import { ChangeEvent, FC } from "react";
import "./index.css";

interface IInputButton {
  placeholder: string;
  value: string;
  buttonLabel?: string;
  onChange: (value: string) => void;
  onButtonClick?: () => void;
}
export const InputButton: FC<IInputButton> = (props) => {
  const { placeholder, value, onChange, buttonLabel, onButtonClick } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="task__input"
        data-testid="input"
      />
      <button
        onClick={handleButtonClick}
        className="add"
        data-testid="add-button"
      >
        {buttonLabel}
      </button>
    </>
  );
};
