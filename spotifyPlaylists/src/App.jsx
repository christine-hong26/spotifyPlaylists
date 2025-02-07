import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import catWink from "./images/catWink.jpg"
import catFoot from "./images/catFoot.jpg"
import catBlue from "./images/catBlue.jpg"
import spotify from "./images/spotify.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={spotify} className='spotify-logo'/>
      <h1>christine's spotify playlists</h1>
      <div className="icon-container">
        <div className='playlist-icon'>
          <a href='https://open.spotify.com/playlist/6gbAC8Dhg8HSopBVH4b4qi?si=15eaf0bcc3d6451c' target="_blank"><img src={catWink} /></a>
        </div>
        <div className='playlist-icon'>
          <a href='https://open.spotify.com/playlist/2HE1YrQR9qMA86W3qtb1LR?si=d1eb2c9a3c674456' target="_blank"><img src={catFoot} /></a>
        </div> 
        <div className='playlist-icon'>
          <a href='https://open.spotify.com/playlist/210HNDZ7NwiB5I8nu3jiZ2?si=b97b4cbf31aa4454' target="_blank"><img src={catBlue} /></a>
        </div>
      </div>      
    </>
  )
}

export default App