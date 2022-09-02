import { useEffect, useState } from 'react';



/** boulder climber constructor function */

function boulderClimber({...props}, climberNumber, boulderNumber) {
const climber = {}
climber.climberName = props.dataFromApi.climbers[climberNumber]
climber.isClimbing = false
climber.hasClimbed = false
climber.hasZoned = false
climber.hasTopped = false
console.log(climber)
  return (
    climber
  )
}


/** Constructor for bouldering to create an array of objects with the data from the API */

function ScoreBoardConstructor({...props}) {
  if (props.dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor = [];
    boulderConstructor.push({
      boulder1: {
        climber1: boulderClimber({...props}, 0, 0),
        climber2: boulderClimber({...props}, 1, 1),
      }
    })
    return boulderConstructor
  }
}

/** Constructor sub functions for bouldering conditional rendering */

const isClimbing = (i, time, dataFromServer) => {
  return true
} 

/** builds a scoreboard component for each boulder and populates it with the climber, the top and zone scores */

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
      <div className="score-title">
        <p>Boulder {props.boulder}</p>
      </div>
      {climbers}
    </>
    )
  }


  /** sets the conditional styling of the boulder scoreboard */

  const Climber = (props) => {
    let scoreFontStyle;
    if (props.hasClimbed) {
      scoreFontStyle = {
        color: '#FFFFFF',
        fontWeight:200
    }
      
    }
    else if (props.isClimbing) {
      scoreFontStyle = {
        color: '#FFBB38',
        fontWeight: 400
      }
    }
    else {
      scoreFontStyle = {
        color: '#858585',
        fontWeight: 200
      }
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


  /** Individual boulder climber constructor */

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


/** Core Function */


function Score(props) {


  /**constants */

  const [constructor, setConstructor] = useState(ScoreBoardConstructor({...props}))



  /** Boulder specific constructors */

  if (props.dataFromApi.typeOfClimb === "bouldering") {
    const boulders = constructor.map(boulder => {
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


  /** lead climb specific constructors */

  if (props.dataFromApi.typeOfClimb === "lead") {
    return (
    <div>
      <h1>Lead</h1>
    </div>
    );
  }


  /** error return */

  else {
    return <div>
      <h1>Error</h1>
    </div>
  }
}

function Scoreboard(props) {
    return (
      <div className="scoreboard">
        <h1 className="score-event">{props.dataFromApi.event}</h1>
        <h1 className="score-event">{props.dataFromApi.event_underscore}</h1>
        <Score 
          dataFromApi = {props.dataFromApi}
          dataFromServer = {props.dataFromServer}
          time = {props.time}
        />
      </div>
    );
  }

export default Scoreboard;