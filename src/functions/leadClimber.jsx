/** Lead climb constructor functions */

export default function leadClimber(
  { ...props },
  name,
  climberData,
  climberNumber,
  climbingBracket,
  climberTypeNo
) {
  const climber = {};
  climber.climberName = name;

  const lead =
    props.dataFromServer[climberTypeNo][climbingBracket][
      `climber${climberNumber + 1}`
    ];
  climber.score = lead.score;
  climber.isClimbing = isClimbing(props.time, climberData);
  climber.hasClimbed = hasCompleted(props.time, climberData);
  climber.timeTaken = climberData.endsclimbing - climberData.startsclimbing
  return climber;
}

function isClimbing(time, climberData) {
  if (time >= climberData.startsclimbing && time <= climberData.endsclimbing) {
    return true;
  }
  return false;
}

function hasCompleted(time, climberData) {
  const endsClimbing = climberData.endsclimbing;
  if (time > endsClimbing) {
    return true;
  }
  return false;
}
