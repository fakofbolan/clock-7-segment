import { useEffect, useState } from "react";
import "./App.scss";
import Number from "./components/Number";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const time = new Date();
  const splitHh = hours.toString().split("");
  const splitMm = minutes.toString().split("");
  const splitSs = seconds.toString().split("");
  const hh1 = +splitHh[0];
  const hh2 = +splitHh[1];
  const mm1 = +splitMm[0];
  const mm2 = +splitMm[1];
  const ss1 = +splitSs[0];
  const ss2 = +splitSs[1];

  const refreshClock = () => {
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <div className="App">
      <Number klasa={hours < 10 ? 0 : hh1} />
      <Number klasa={hours < 10 ? hh1 : hh2} />
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <Number klasa={minutes < 10 ? 0 : mm1} />
      <Number klasa={minutes < 10 ? mm1 : mm2} />
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <Number klasa={seconds < 10 ? 0 : ss1} />
      <Number klasa={seconds < 10 ? ss1 : ss2} />
    </div>
  );
}

export default App;
