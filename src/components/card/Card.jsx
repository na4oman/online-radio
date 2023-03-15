import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './Card.css'

const Card = ({ item }) => {
  const [url, setUrl] = useState('')

  const handleClick = e => {
    setUrl(item.radio_url)
  }

  return (
    <div className={url === '' ? 'card' : 'card active'}>
      <div className='image'>
        <img src={item.radio_image} alt='' onClick={handleClick} />
      </div>
      <div className='info'>
        <h4 className='title'>{item.radio_name}</h4>
        <ReactAudioPlayer src={url} autoPlay controls className='player' />
        <span className='genre'>Genre: {item.genre}</span>
      </div>
    </div>
  )
}

export default Card
