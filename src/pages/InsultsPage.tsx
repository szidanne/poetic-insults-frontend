"use client";
import { useCallback, useEffect, useState } from "react";
import { generateInsult } from "../utils/insultGenerator";
import RoastButton from "../components/RoastButton";
import InsultDisplay from "../components/InsultDisplay";
import "../styles/style.css";

const InsultsPage: React.FC = () => {
  const [insult, setInsult] = useState<string>("");

  const roast = useCallback(() => {
    setInsult(generateInsult());
  }, []);

  useEffect(() => roast(), []);

  return (
    <div className="max-w-4xl w-full flex flex-col gap-y-4 items-center">
      <h1>Roast me</h1>
      <div className="flex flex-col gap-y-12 items-center">
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <InsultDisplay>{insult}</InsultDisplay>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <RoastButton onClick={roast} />
        </div>
      </div>
    </div>
  );
};

export default InsultsPage;
