
/** boulder climber constructor function */

function boulderClimber({...props}, climberNumber, boulderNumber) {
    const climber = {}
    climber.climberName = props.dataFromApi.climbers[climberNumber]
    climber.isClimbing = isClimbing({...props}, climberNumber, boulderNumber, 'startsclimbing', 'endsclimbing')
    climber.hasClimbed = hasCompleted({...props}, climberNumber, boulderNumber, 'endsclimbing')
    climber.hasZoned = hasCompleted({...props}, climberNumber, boulderNumber, 'zones')
    climber.hasTopped = hasCompleted({...props}, climberNumber, boulderNumber, 'tops')
      return (
        climber
    )
}

/** boulder hasCompleted constructor function */

function hasCompleted({...props}, climberNumber, boulderNumber, type) {
  const boulder = props.dataFromServer[boulderNumber-1][`boulder${boulderNumber}`]
  const value = boulder[`climber${climberNumber+1}`][type]  
  if (value === 0) {
    return false 
  }
  if (props.time >= value) {
    return (true)
  }
  else {
    return (false)
  }
}

/** boulder isClimbing function */

function isClimbing({...props}, climberNumber, boulderNumber, start, end) {
  const boulder = props.dataFromServer[boulderNumber-1][`boulder${boulderNumber}`]
  const startclimbing = boulder[`climber${climberNumber+1}`][start]
  const endclimbing = boulder[`climber${climberNumber+1}`][end]
  if (startclimbing <= props.time && endclimbing >= props.time) {
    return true
  }
  else {
    return false
  }
}


/** Constructor for bouldering to create an array of objects with the data from the API */

function ScoreBoardConstructor({...props}) {
  if (props.dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor = [];
/* create boulder event `boulder${[i+1]}` **/
    for (let i = 0; i < props.dataFromApi.numberOfClimbs; i++) {
      let boulderNumber = i + 1
      let climbers = {}
      for (let climberNumber = 0; climberNumber < props.dataFromApi.climbers.length; climberNumber++) {
        climbers[`climber${[climberNumber]}`] = boulderClimber({...props}, climberNumber, boulderNumber)
      }
      let boulder = `boulder${boulderNumber}`
      boulderConstructor[boulder] = climbers
    }
    return boulderConstructor
  }
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
        <p>Boulder </p>
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

  const constructor = ScoreBoardConstructor({...props})



  /** Boulder specific constructors */

  if (props.dataFromApi.typeOfClimb === "bouldering") {
    const boulders = []
    for (const item in constructor) {
      boulders.push(
        <BoulderScore
        key={constructor[item]}
        {...constructor[item]}
        />
      )
    }
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