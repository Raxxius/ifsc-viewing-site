import YouTube from 'react-youtube'


const opts = {
  height: '100%',
  width: '100%'
}

const checkElapsedTime = (e) => {
  const duration = e.target.getDuration();
  const currentTime = e.target.getCurrentTime();
  console.log(duration, currentTime)
}


function Viewscreen(props) {
    return (
        <YouTube 
          className="viewscreen" 
          videoId={props.src} 
          opts= {opts} 
          style={{width: '100%'}} 
          onStateChange={(e) => checkElapsedTime(e)}/>
    );
  }

export default Viewscreen;