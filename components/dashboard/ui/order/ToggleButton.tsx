import React from "react";

const ToggleButton = ({ text, toggle, onClick }: any) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-1 px-2 h-fit cursor-pointer bg-accent rounded-full text-white text-sm ${
        toggle == text ? "" : "opacity-50 hover:opacity-70"
      } transition-opacity ease-in-out 100ms`}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
