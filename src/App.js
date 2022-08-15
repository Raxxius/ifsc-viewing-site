import './App.css';
import Navbar from './components/Navbar.jsx'
import Viewscreen from './components/Viewscreen.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import ClimberStat from './components/ClimberStat.jsx'
import { useState } from 'react';



function App() {
  const viewBoxHeight = window.innerHeight - 85
  const style = {
    height: viewBoxHeight
  }

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

export default App;
