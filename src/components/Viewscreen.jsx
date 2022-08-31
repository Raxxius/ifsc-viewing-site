import YouTube from 'react-youtube'

const opts = {
  height: '100%',
  width: '100%'
}

function Viewscreen(props) {
    return (
        <YouTube className="viewscreen" videoId='NAZycE9agy4' opts= {opts} style={{width: '100%'}}/>
    );
  }

export default Viewscreen;