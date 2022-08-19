function Viewscreen(props) {
    return (
      <div className="viewscreen" height="fit-content">
        <iframe src={props.src} height="100%" width="100%" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }

export default Viewscreen;