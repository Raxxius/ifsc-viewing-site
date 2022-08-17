import './App.css';
import Navbar from './components/Navbar.jsx'
import Viewscreen from './components/Viewscreen.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import ClimberStat from './components/ClimberStat.jsx'
import { useEffect, useState } from 'react';



function App() {
  
  const style = useViewBoxHeight()

  return (
    <div className="App">
      <Navbar />
      <div className="view-box-parent" style={style}> 
        <div className='view-box-1'>
          <Scoreboard />
        </div>
        <div className='view-box-2'>
          <Viewscreen />
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

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  })

  return viewBoxHeight

}

export default App;