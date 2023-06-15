import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Viewscreen from "./components/Viewscreen.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import ClimberStat from "./components/ClimberStat.jsx";
import { useEffect, useState } from "react";
import {
  dataFromApi2,
  dataFromApi1,
  dataFromServer1,
  dataFromServer2,
} from "./tests/testdatafromapi";
import useViewBoxHeight from "./hooks/useViewBoxHeight";

function App() {
  /** Constants */

  const style = useViewBoxHeight();
  const src = dataFromApi2.src;
  const [time, setTime] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  /** React state management functions */

  const startPlaying = (e, time) => {
    time = e.target.getCurrentTime();
    setVideoPlaying(true);
    setTime(time);
  };

  const stopPlaying = (e, time) => {
    time = e.target.getCurrentTime();
    setVideoPlaying(false);
    setTime(time);
  };

  useEffect(() => {
    if (videoPlaying) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, videoPlaying]);

  /** core render section */

  return (
    <div className="App">
      <Navbar />
      <div className="view-box-parent" style={style}>
        <div className="view-box-1">
          <Scoreboard
            dataFromServer={dataFromServer2}
            dataFromApi={dataFromApi2}
            time={time}
          />
        </div>
        <div className="view-box-2">
          <Viewscreen
            src={src}
            startPlaying={startPlaying}
            stopPlaying={stopPlaying}
            time={time}
          />
          <ClimberStat />
        </div>
      </div>
    </div>
  );
}

export default App;
