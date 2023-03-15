import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './Card.css'

const Card = ({ item }) => {
  const [url, setUrl] = useState('')

  return (
    <div className='card'>
      <div className='image'>
        <img src={item.radio_image} alt='' />
      </div>
      <div className='info'>
        <h4 className='title'>{item.radio_name}</h4>
        <ReactAudioPlayer
          src={item.radio_url}
          // autoPlay
          controls
          className='player'
        />
        {/* {url && <iframe src={url} title={item.radio_name}></iframe>} */}
        <span className='genre'>Genre: {item.genre}</span>
      </div>
    </div>
  )
}

export default Card
