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
}

/** boulder climber constructor function */

function boulderClimber({ ...props }, climberNumber, boulderNumber) {
  const climber = {};
  climber.climberName = props.dataFromApi.climbers[climberNumber];
  climber.isClimbing = isClimbing(
    { ...props },
    climberNumber,
    boulderNumber,
    "startsclimbing",
    "endsclimbing"
  );
  climber.hasClimbed = hasCompleted(
    { ...props },
    climberNumber,
    boulderNumber,
    "endsclimbing"
  );
  climber.hasZoned = hasCompleted(
    { ...props },
    climberNumber,
    boulderNumber,
    "zones"
  );
  climber.hasTopped = hasCompleted(
    { ...props },
    climberNumber,
    boulderNumber,
    "tops"
  );
  return climber;
}

/** boulder hasCompleted constructor function */

function hasCompleted({ ...props }, climberNumber, boulderNumber, type) {
  const boulder =
    props.dataFromServer[boulderNumber - 1][`boulder${boulderNumber}`];
  const value = boulder[`climber${climberNumber + 1}`][type];
  if (value === 0) {
    return false;
  }
  if (props.time >= value) {
    return true;
  } else {
    return false;
  }
}

/** boulder isClimbing function */

function isClimbing({ ...props }, climberNumber, boulderNumber, start, end) {
  const boulder =
    props.dataFromServer[boulderNumber - 1][`boulder${boulderNumber}`];
  const startclimbing = boulder[`climber${climberNumber + 1}`][start];
  const endclimbing = boulder[`climber${climberNumber + 1}`][end];
  if (startclimbing <= props.time && endclimbing >= props.time) {
    return true;
  } else {
    return false;
  }
}
