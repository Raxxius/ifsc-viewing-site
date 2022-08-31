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
  climb1: [[false, false, false, false], [false, false, false, false]]
}




function App() {
  
  const style = useViewBoxHeight()
  const src = "NAZycE9agy4"

  return (
    <div className="App">
      <Navbar />
      <div className="view-box-parent" style={style}> 
        <div className='view-box-1'>
          <Scoreboard 
          dataFromApi={dataFromApi}
          />
        </div>
        <div className='view-box-2'>
          <Viewscreen
            src={src}
          />
          <ClimberStat />
        </div>
      </div>
    </div>
  );
}


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