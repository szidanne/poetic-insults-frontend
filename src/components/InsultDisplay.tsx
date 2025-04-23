import React from "react";

interface InsultDisplayProps {
  children?: string;
}

const InsultDisplay: React.FC<InsultDisplayProps> = ({ children }) => {
  return (
    <p
      className="
          relative
          max-w-2xl
          mx-auto
          text-xl md:text-2xl
          text-center
          font-serif
          leading-relaxed
          text-gray-800
          dark:text-gray-200
          p-4
          rounded-lg
          bg-white/80
          dark:bg-slate-800/50
          backdrop-blur-sm
          border border-gray-200
          dark:border-slate-700/50
          shadow-lg
        "
    >
      {children ?? "Loading insult..."}
    </p>
  );
};

export default InsultDisplay;
