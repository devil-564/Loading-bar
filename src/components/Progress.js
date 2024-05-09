import { useEffect, useState } from "react";

const Progress = ({ value }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <>
      <div className="progress">
        <div
          style={{
            minHeight: "5vw",
            position: "absolute",
            backgroundColor: "blue",
            width: `${percent}%`,
            zIndex: "-1",
            inset: "0",
          }}
        ></div>
        <span
          style={{
            color: percent > 49 ? "white" : "black",
          }}
        >
          {percent < 100 ? `${percent}%` : "COMPLETED"}
        </span>
      </div>
    </>
  );
};

export default Progress;
