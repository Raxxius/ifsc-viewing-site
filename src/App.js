import './App.css';
import Navbar from './components/Navbar.jsx'
import Viewscreen from './components/Viewscreen.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import ClimberStat from './components/ClimberStat.jsx'
import { useEffect, useState } from 'react';


/** Fake data to be sent from API */

const dataFromApi = {
  event: "IFSC World Championships Moscow 2021",
  event_underscore: "Womens Final",
  climbers: [
    "Stasa Gejo",
    "Brooke Raboutou",
    "Andrea Kümin",
    "Elena Krasovskaia",
    "Camilla Moroni",
    "Natalia Grossman",
  ],
  typeOfClimb: "bouldering",
  numberOfClimbs: 4,
  src: "NAZycE9agy4",
}

const dataFromServer = [
  {
  boulder1: {
      climber1: {
        startsclimbing: 787,
        endsclimbing: 1016,
        zones: 807,
        tops: 0
      },
      climber2: {
        startsclimbing: 1065,
        endsclimbing: 1193,
        zones: 1102,
        tops: 1190
      },
      climber3: {
        startsclimbing: 1247,
        endsclimbing: 1500,
        zones: 1292,
        tops: 1452,
      },
      climber4: {
        startsclimbing: 1534,
        endsclimbing: 1745,
        zones: 0,
        tops: 0,
      },
      climber5: {
        startsclimbing: 1785,
        endsclimbing: 1945,
        zones: 1806,
        tops: 1936,
      },
      climber6: {
        startsclimbing: 2003,
        endsclimbing: 2048,
        zones: 2022,
        tops: 2042,
      },
    },
  },
  {
  boulder2: {
    climber1: {
      startsclimbing: 0,
      endsclimbing: 0,
      zones: 0,
      tops: 0
    },
    climber2: {
      startsclimbing: 0,
      endsclimbing: 0,
      zones: 0,
      tops: 0
    },
    climber3: {
      startsclimbing: 1247,
      endsclimbing: 1500,
      zones: 1292,
      tops: 1452,
    },
    climber4: {
      startsclimbing: 1534,
      endsclimbing: 1745,
      zones: 0,
      tops: 0,
    },
    climber5: {
      startsclimbing: 1785,
      endsclimbing: 1945,
      zones: 1806,
      tops: 1936,
    },
    climber6: {
      startsclimbing: 2003,
      endsclimbing: 2048,
      zones: 2022,
      tops: 2042,
    },
  },
},
]


function App() {


  /** Constants */
  
  const style = useViewBoxHeight();
  const src = dataFromApi.src;
  const [time, setTime] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);


  /** React state management functions */

  const startPlaying = (e, time) => {
    time = e.target.getCurrentTime();
    setVideoPlaying(true);
    setTime(time);
  }

  const stopPlaying = (e, time) => {
    time = e.target.getCurrentTime();
    setVideoPlaying(false);
    setTime(time);
  }

  useEffect(() => {
    if (videoPlaying) {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000); 
    return () => clearInterval(interval);
  }}, [!videoPlaying]);

  /** test code for visability to be removed in final build */
  function TestTrue(props) {
    if (props.videoPlaying) {
      return (
    <span>Video is playing</span>
    )
  }
  else {
  
    return (<span> video is not playing</span>
  )}
  }
  

  /** core render section */

  return (

    <div className="App">
      <Navbar />
      <div className="view-box-parent" style={style}> 
        <div className='view-box-1'>
          <Scoreboard 
          dataFromServer={dataFromServer}
          dataFromApi={dataFromApi}
          time={time}
          />
        </div>
        <div className='view-box-2'>
          <Viewscreen
            src={src}
            startPlaying={startPlaying}
            stopPlaying={stopPlaying}
            time={time}
          />
          <div>
            {time}
          </div>
          <div>
          <TestTrue 
          videoPlaying={videoPlaying}
          />
          </div>
          <ClimberStat />
        </div>
      </div>
    </div>
  );
}


/** Viewbox auto size readjuster */

function useViewBoxHeight() {
  const [viewBoxHeight, setViewBoxHeight] = useState({
    height: window.innerHeight - 85
  });

  useEffect(() => {
    function handleResize() {
      setViewBoxHeight({
        height: window.innerHeight - 85
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  })

  return viewBoxHeight
}

export default App;