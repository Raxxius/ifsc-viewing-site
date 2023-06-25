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

  const dataFromApi = [dataFromApi1, dataFromApi2]
  const dataFromServer = [dataFromServer1, dataFromServer2]

  /** State management */
  const [src, setSrc] = useState(dataFromApi[0].src);
  const [data, setData] = useState(dataFromApi[0]);
  const [serverData, setServerData] = useState(dataFromServer[0]);
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

  const changeEvent = (e) => {
    const newSrc = dataFromApi[e-1].src
    const newData = dataFromApi[e-1]
    const newServerData = dataFromServer[e-1]

    setSrc(newSrc);
    setData(newData);
    setServerData(newServerData);
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
      <Navbar 
        changeEvent={changeEvent}
      />
      <div className="view-box-parent" style={style}>
        <div className="view-box-1">
          <Scoreboard
            dataFromServer={serverData}
            dataFromApi={data}
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
