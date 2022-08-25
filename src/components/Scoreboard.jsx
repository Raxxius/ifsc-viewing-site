
// List of scores test file//

import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

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
  numberOfClimbs: 4
}

/** Constuctor to create an array of objects with the data from the API */

function ScoreBoulderConstructor(dataFromApi) {
  let boulderConstructor = [];
  for (let i = 0; i < dataFromApi.climbers.length; i++) {
    boulderConstructor.push({
      climberName: dataFromApi.climbers[i],
      isClimbing: false,
      hasClimbed: true,
      hasZoned: true,
      hasTopped: false,
    })
  }
  let boulderStats =[]
  for (let i = 0; i < dataFromApi.numberOfClimbs; i++) {
    boulderStats.push({
      boulder: i + 1,
      ...boulderConstructor,
    })
  }
  return boulderStats
}

const BoulderScore = (props) => {
  const climbers = [] 
  {Object.values(props).forEach(val => {
   climbers.push(<Climber 
        key={val.climberName}
        {...val}
   />
   )
  })}
  return (
    <>
      <div>
        <p>Boulder {props.boulder}</p>
      </div>
      {climbers}
    </>
    )
  }

const Climber = (props) => {
  let scoreFontStyle;
  if (props.hasClimbed) {
    scoreFontStyle = {color: '#FFFFFF'}
  }
  else if (props.isClimbing) {
    scoreFontStyle = {color: '#FFBB38'}
  }
  else {
    scoreFontStyle = {color: '#858585'}
  }

  let scoreBoxZone;
  if (props.isClimbing || props.hasClimbed) {
    if (props.hasZoned) {
      scoreBoxZone = {
        border: '1px solid #FFBB38',
        backgroundColor: '#FFBB38'
      }
    }
    else {
      scoreBoxZone = {
        border: '1px solid #FFBB38'
      }
    }
  }
  else {
    scoreBoxZone = {
       border: '1px solid #858585'
    }
  }
  
  let scoreBoxTop;
  if (props.isClimbing || props.hasClimbed) {
    if (props.hasTopped) {
      scoreBoxTop = {
        border: '1px solid #FFBB38',
        backgroundColor: '#FFBB38'
      }
    }
    else {
      scoreBoxTop = {
        border: '1px solid #FFBB38'
      }
    }
  }
  else {
    scoreBoxTop = {
       border: '1px solid #858585'
    }
  }

  if (props.climberName) { return (
    <div className="score-pane">
      <p className="score-climber" style={scoreFontStyle}>
          {props.climberName}
          </p>
      <div className="score-box-holder">
        <div 
          className="score-box" style={scoreBoxZone}>
        </div>
        <div className="score-box" style={scoreBoxTop}></div>
      </div>
    </div>
  )}
}


function Score() {
  if (dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor2 = ScoreBoulderConstructor(dataFromApi)
    const boulders = boulderConstructor2.map(boulder => {
      return (
        <BoulderScore 
        key={boulder.climberName}
        {...boulder}/>
      )
    })
    return (
      <div className="score-card">
        {boulders}
      </div>
    );
  }
  if (dataFromApi.typeOfClimb === "lead") {
    return (
    <div>
      <h1>Lead</h1>
    </div>
    );
  }
  else {
    return <div>
      <h1>Error</h1>
    </div>
  }
}


function Scoreboard() {
    return (
      <div className="scoreboard">
        <h1 className="score-event">{dataFromApi.event}</h1>
        <h1 className="score-event">{dataFromApi.event_underscore}</h1>
        <Score />
      </div>
    );
  }

export default Scoreboard;