/** builds a scoreboard component for each boulder and populates it with the climber, the top and zone scores */

export const BoulderScore = (props) => {
    const climbers = [];
      Object.values(props).forEach((val) => {
        climbers.push(<Climber key={val.climberName} {...val} />);
      });
    return (
      <>
        <div className="score-title">
          <p>Boulder </p>
        </div>
        {climbers}
      </>
    );
  };
  
  /** sets the conditional styling of the boulder scoreboard */
  
  const Climber = (props) => {
    let scoreFontStyle;
    if (props.hasClimbed) {
      scoreFontStyle = {
        color: "#FFFFFF",
        fontWeight: 200,
      };
    } else if (props.isClimbing) {
      scoreFontStyle = {
        color: "#FFBB38",
        fontWeight: 400,
      };
    } else {
      scoreFontStyle = {
        color: "#858585",
        fontWeight: 200,
      };
    }
  
    let scoreBoxZone;
    if (props.isClimbing || props.hasClimbed) {
      if (props.hasZoned) {
        scoreBoxZone = {
          border: "1px solid #FFBB38",
          backgroundColor: "#FFBB38",
        };
      } else {
        scoreBoxZone = {
          border: "1px solid #FFBB38",
        };
      }
    } else {
      scoreBoxZone = {
        border: "1px solid #858585",
      };
    }
  
    let scoreBoxTop;
    if (props.isClimbing || props.hasClimbed) {
      if (props.hasTopped) {
        scoreBoxTop = {
          border: "1px solid #FFBB38",
          backgroundColor: "#FFBB38",
        };
      } else {
        scoreBoxTop = {
          border: "1px solid #FFBB38",
        };
      }
    } else {
      scoreBoxTop = {
        border: "1px solid #858585",
      };
    }
  
    /** Individual boulder climber constructor */
  
    if (props.climberName) {
      return (
        <div className="score-pane">
          <p className="score-climber" style={scoreFontStyle}>
            {props.climberName}
          </p>
          <div className="score-box-holder">
            <div className="score-box" style={scoreBoxZone}></div>
            <div className="score-box" style={scoreBoxTop}></div>
          </div>
        </div>
      );
    }
  };
  