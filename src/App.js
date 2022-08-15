import './App.css';
import Navbar from './components/Navbar.jsx'
import Viewscreen from './components/Viewscreen.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import ClimberStat from './components/ClimberStat.jsx'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Viewscreen />
      <Scoreboard />
      <ClimberStat />
    </div>
  );
}

export default App;
