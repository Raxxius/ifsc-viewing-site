/** builds a scoreboard component for each lead event and populate it with the climber, and conditional rendered score */

export const LeadScore = (props) => {

  let climbers = []
  Object.values(props).forEach((val) => {
    if (`${props.passKey}${val.climberName}` !== `${props.passKey}undefined`) {
      const key = `${props.passKey}${val.climberName}`;
      val["key"] = key;
      climbers.push(val);
    }
  });
  const notClimbed = [];
  const isClimbing = [];
  const hasClimbed = [];
  climbers.forEach((climber) => {
    if (!climber["hasClimbed"] && !climber["isClimbing"])
      notClimbed.push(climber);
    if (climber["isClimbing"]) isClimbing.push(climber);
    if (climber["hasClimbed"] && !climber["isClimbing"])
      hasClimbed.push(climber);
  });
  hasClimbed.sort((a, b) => {
    let aScore = scoreToInt(a);
    let bScore = scoreToInt(b);
    if (aScore === bScore) {
      return a["timeTaken"] - b["timeTaken"];
    }
    return bScore - aScore;
  });
  climbers = hasClimbed.concat(isClimbing, notClimbed);
  const returnClimbers = [];
  climbers.forEach((val) => {
    returnClimbers.push(<Climber key={val.key} {...val} />);
  });
  return (
    <>
      <h1>{props.passKey}s final</h1>
      <div>{returnClimbers}</div>
    </>
  );
};

const scoreToInt = (a) => {
  let aIntScore = 0;
  let aScore = a["score"];
  if (aScore === "Top") {
    aIntScore = 100;
  } else aIntScore = parseInt(aScore.replace(/\D/g, ""));
  if (aScore.includes("+")) {
    aIntScore = aIntScore + 0.5;
  }
  return aIntScore;
};

const Climber = (props) => {
  if (props.climberName) {
    return (
      <div className="score-pane">
        <p className="score-climber">{props.climberName}</p>
        {props.hasClimbed ? (
          <span className="lead-score">{props.score}</span>
        ) : (
          ""
        )}
      </div>
    );
  }
};
