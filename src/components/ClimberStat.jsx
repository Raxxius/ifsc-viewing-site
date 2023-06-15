
function ClimberStat(props) {
    return (
      <div className="climberstat">
        <h1 className="climber-name">{props.climberName}</h1>
        <div className="climber-stats">{props.climberStats}</div>
        <div className="social-media">{props.climberSocial}</div>
      </div>
    );
  }

export default ClimberStat;