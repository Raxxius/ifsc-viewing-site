
/** Constuctor to create an array of objects with the data from the API */

function ScoreBoulderConstructor(dataFromApi, dataFromServer) {
  let boulderConstructor = [];
  for (let i = 0; i < dataFromApi.climbers.length; i++) {
    boulderConstructor.push({
      climberName: dataFromApi.climbers[i],
      isClimbing: false,
      hasClimbed: false,
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
  console.log(dataFromServer)
  return boulderStats
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

  /** sets the conditional styling of the climbers scoreboard */
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

  /** Individual climber name html constructor */

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



function Score(props) {;
  if (props.dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor2 = ScoreBoulderConstructor(props.dataFromApi, props.dataFromServer)
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
  if (props.dataFromApi.typeOfClimb === "lead") {
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

function Scoreboard(props) {
    return (
      <div className="scoreboard">
        <h1 className="score-event">{props.dataFromApi.event}</h1>
        <h1 className="score-event">{props.dataFromApi.event_underscore}</h1>
        <Score 
        dataFromApi = {props.dataFromApi}
        dataFromServer ={props.dataFromServer}/>
      </div>
    );
  }

export default Scoreboard;