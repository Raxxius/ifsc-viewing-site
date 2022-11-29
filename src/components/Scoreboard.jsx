import ScoreBoardConstructor from "../functions/ScoreBoardConstructor";
import { BoulderScore } from "../functions/BoulderScore";

/** Core Function */

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <h1 className="score-event">{props.dataFromApi.event}</h1>
      <h1 className="score-event">{props.dataFromApi.event_underscore}</h1>
      <Score
        dataFromApi={props.dataFromApi}
        dataFromServer={props.dataFromServer}
        time={props.time}
      />
    </div>
  );
}

function Score(props) {
  /**constants */

  const constructor = ScoreBoardConstructor({ ...props });

  /** Boulder specific constructors */

  if (props.dataFromApi.typeOfClimb === "bouldering") {
    const boulders = [];
    for (const item in constructor) {
      console.log(constructor[item])
      boulders.push(
        <BoulderScore key={item} passKey={item}  {...constructor[item]} />
      );
    }
    return <div className="score-card">{boulders}</div>;
  }

  /** lead climb specific constructors */

  if (props.dataFromApi.typeOfClimb === "lead") {
    return (
      <div>
        <h1>Lead</h1>
      </div>
    );
  } else {
    /** error return */
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
}

export default Scoreboard;
