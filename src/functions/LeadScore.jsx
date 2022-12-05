/** builds a scoreboard component for each lead event and populate it with the climber, and conditional rendered score */

export const LeadScore = (props) => {
  let climbers = [];
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
    returnClimbers.push(
      <Climber key={val.key} {...val} number={returnClimbers.length + 1} />
    );
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

/** sets the conditional syling of the lead scoreboard */

const Climber = (props) => {
  let scoreFontStyle = {
    width: "65%",
    textAlign: "left",
    tranisiton: "all, 1s"
  };
  if (props.hasClimbed) {
    scoreFontStyle["color"] = "#FFFFFF";
    scoreFontStyle["fontWeight"] = 200;
  } else if (props.isClimbing) {
    scoreFontStyle["color"] = "#FFBB38";
    scoreFontStyle["fontWeight"] = 400;
  } else {
    scoreFontStyle["color"] = "#858585";
    scoreFontStyle["fontWeight"] = 200;
  }
  if (props.climberName) {
    return (
      <div className="score-pane">
        <span className="lead-number" style={{ width: "10%" }}>
          {" "}
          {props.hasClimbed ? `${props.number}.` : ""}{" "}
        </span>
        <p className="score-climber" style={scoreFontStyle}>
          {props.climberName}
        </p>
        {props.hasClimbed ? (
          <span className="lead-score">{props.score}</span>
        ) : (
          ""
        )}
      </div>
    );
  }
};
