/** boulder climber constructor function */

export default function boulderClimber({ ...props }, climberNumber, boulderNumber) {
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