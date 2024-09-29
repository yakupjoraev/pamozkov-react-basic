import { useState } from "react";
import "./Video.css";

function Video(props) {
  const {title, chanalName, img} = props;
  // let likesCount = 0;
  const [likesCount, setLikesCount] = useState(0)

  const increaseLikesByOne = ()=> {
    setLikesCount(likesCount + 1) 
  }
  return (
  <div className='video'>
    <img className='video-img' src={img} alt="video img" />
    <p>{title}</p>
    <p>{chanalName}</p>
    <div className='video-footer'>
      <p>Like: {likesCount}</p>
      <button onClick={increaseLikesByOne}>Like</button>
    </div>
  </div>
  )
}

export default Video;