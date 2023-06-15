import leadClimber from "./leadClimber";

export default function ScoreBoardConstructor(props) {
  let leadConstructor = [];
  let climberNameNo = 0;
  let climberTypeNo = 0;
  /** create list for first event*/
  props.dataFromServer.forEach((value) => {
    /** get number of climbers in event from dataFromSever*/
    let climbingBracket = Object.keys(value)[0];
    let noOfClimbers = Object.keys(value[climbingBracket]).length;
    let climbers = {};
    for (let climberNumber = 0; climberNumber < noOfClimbers; climberNumber++) {
      let name = props.dataFromApi.climbers[climberNameNo];
      let climberData = value[climbingBracket][`climber${[climberNumber + 1]}`];
      climbers[`climber${[climberNumber]}`] = leadClimber(
        { ...props },
        name,
        climberData,
        climberNumber,
        climbingBracket,
        climberTypeNo
      );
      climberNameNo++;
    }
    leadConstructor[climbingBracket] = climbers;
    climberTypeNo++;
  });
  return leadConstructor
}
