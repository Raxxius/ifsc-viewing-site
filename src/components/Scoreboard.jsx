
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
      hasClimbed: "no",
      hasZoned: false,
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
  return (
    <div className="score-pane">
      <p>{props.climberName}</p>
      <div className="score-box-holder">
        <div className="score-box"></div>
        <div className="score-box"></div>
      </div>
    </div>
  )
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