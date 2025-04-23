import React from "react";

interface RoastButtonProps {
  onClick: () => void;
}

const RoastButton: React.FC<RoastButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="
      px-8 py-4
      bg-gradient-to-r from-blue-500 to-indigo-600
      hover:from-blue-600 hover:to-indigo-700
      text-white
      rounded-xl
      font-mono tracking-wider text-lg
      transition-transform duration-300
      transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:ring-offset-2 focus:ring-offset-white
      dark:focus:ring-offset-slate-900
      cursor-pointer
    "
  >
    Roast Me Again
  </button>
);

export default RoastButton;
