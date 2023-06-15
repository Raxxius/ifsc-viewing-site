import boulderClimber from "./boulderClimber";

export default function BoulderConstructor(props) {
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
