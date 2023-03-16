import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { AiFillHeart } from 'react-icons/ai'
import { useFav } from '../../context/favContext'
import './Card.css'

const Card = ({ item }) => {
  const [url, setUrl] = useState('')
  const { items, addItem, removeItem } = useFav()

  //Check if current Item exist in fav items
  const isFavorite = items.find(i => i.radio_id === item.radio_id)

  const handleClick = e => {
    setUrl(item.radio_url)
  }

  const handleClearUrl = e => {
    setUrl('')
  }

  const handleFavoriteToggle = item => {
    if (isFavorite) {
      removeItem(item)
    } else {
      addItem(item)
    }
  }

  return (
    <div className={url === '' ? 'card' : 'card active'}>
      <div className='image'>
        <img src={item.radio_image} alt='' onClick={handleClick} />
        <AiFillHeart
          className={isFavorite ? 'fav-icon fav-icon-active' : 'fav-icon'}
          onClick={() => handleFavoriteToggle(item)}
        />
      </div>
      <div className='info'>
        <h4 className='title'>{item.radio_name}</h4>
        <ReactAudioPlayer
          src={url}
          autoPlay
          controls
          className='player'
          onPause={handleClearUrl}
        />
        <span className='genre'>Genre: {item.genre}</span>
      </div>
    </div>
  )
}

export default Card
