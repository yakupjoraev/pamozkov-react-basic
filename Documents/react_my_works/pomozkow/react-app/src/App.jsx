import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Video/Video';
import { VIDEOS } from './videos';
import './App.css'

function App() {
  return (
    <>
     <div className='video-container'>
      {/* <Video title="Video 2" chanalName="Pomozkov" img={reactLogo}/> */}

      {
        VIDEOS.map((video)=> (
          <Video key={video.id} title={video.title} chanalName={video.chanalName} img={video.img}/>
        ))
      }
     </div>
    </>
  )
}

export default App
