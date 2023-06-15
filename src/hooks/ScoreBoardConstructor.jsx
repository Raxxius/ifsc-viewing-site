import boulderClimber from "./boulderClimber";
import leadClimber from "./leadClimber";

/** Constructor for bouldering to create an array of objects with the data from the API */

export default function ScoreBoardConstructor({ ...props }) {
  if (props.dataFromApi.typeOfClimb === "bouldering") {
    let boulderConstructor = [];
    /* create boulder event `boulder${[i+1]}` **/
    for (let i = 0; i < props.dataFromApi.numberOfClimbs; i++) {
      let boulderNumber = i + 1;
      let climbers = {};
      for (
        let climberNumber = 0;
        climberNumber < props.dataFromApi.climbers.length;
        climberNumber++
      ) {
        climbers[`climber${[climberNumber]}`] = boulderClimber(
          { ...props },
          climberNumber,
          boulderNumber
        );
      }
      let boulder = `Boulder ${boulderNumber}`;
      boulderConstructor[boulder] = climbers;
    }
    return boulderConstructor;
  }
  if (props.dataFromApi.typeOfClimb === "lead") {
    /** create lead event **/
    let leadConstructor = [];
    let climberNameNo = 0;
    let climberTypeNo = 0;
    /** create list for first event*/
    props.dataFromServer.forEach((value) => {
      /** get number of climbers in event from dataFromSever*/
      let climbingBracket = Object.keys(value)[0];
      let noOfClimbers = Object.keys(value[climbingBracket]).length;
      let climbers = {};
      for (
        let climberNumber = 0;
        climberNumber < noOfClimbers;
        climberNumber++
      ) {
        let name = props.dataFromApi.climbers[climberNameNo];
        let climberData =
          value[climbingBracket][`climber${[climberNumber + 1]}`];
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
}
