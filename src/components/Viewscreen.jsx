import YouTube from 'react-youtube'

const opts = {
  height: '100%',
  width: '100%'
}


function Viewscreen(props) {
    return (
        <YouTube 
          className="viewscreen" 
          videoId={props.src} 
          opts= {opts} 
          style={{width: '100%'}} 
          onStateChange={(e) => props.stopPlaying(e, props.time)}
          onPlay={(e) => props.startPlaying(e, props.time)}
          />
    );
  }

export default Viewscreen;