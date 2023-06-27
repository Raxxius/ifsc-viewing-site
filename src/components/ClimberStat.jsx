import boulderClimber from "../hooks/boulderClimber";

function ClimberStat(props) {
  const {dataFromServer, time, dataFromApi} = props
  /* props deconstruction */
  const currentClimber = whoIsClimbing(dataFromServer, time, dataFromApi)

    return (
      <div className="climberstat">
        <h1 className="climber-name">{currentClimber}</h1>
        <div className="climber-stats">{props.climberStats}</div>
        <div className="social-media">{props.climberSocial}</div>
      </div>
    );
  }

export default ClimberStat;

function whoIsClimbing(dataFromServer, time, dataFromApi) {

  const climbers = dataFromApi.climbers

  for (const boulderNumber in dataFromServer) {
    for (const boulder in dataFromServer[boulderNumber]){
      for (const climber in dataFromServer[boulderNumber][boulder]) {
        const climberTimes = dataFromServer[boulderNumber][boulder][climber]
        if (time >= climberTimes.startsclimbing && time <= climberTimes.endsclimbing) {
          const climbNumber = climber.match(/(\d+)/)[0]-1;
          return climbers[climbNumber]
        }
      }
    }
  }

  return (null)
}