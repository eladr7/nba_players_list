import React from "react";

interface ToggleButtonProps {
  onClick: () => void;
  isPressed: boolean;
  text: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  isPressed,
  text,
}) => {
  const handleClick = () => {
    const scrollY = window.scrollY; // Save the current scroll position
    onClick();
    window.scrollTo(0, scrollY);
  };

  return (
    <button
      className={`px-2 py-1 rounded w-52 ${
        isPressed ? "bg-red-500" : "bg-yellow-400"
      } text-white`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
