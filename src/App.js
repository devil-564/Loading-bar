import { useEffect, useState } from "react";
import Progress from "./components/Progress";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    var timer = setInterval(() => {
      setValue((val) => val + 1);
      console.log("hello");
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <Progress value={value} />
    </div>
  );
}
