import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import './Header.css'
import { useFav } from '../../context/favContext'

const Header = () => {
  const { items } = useFav()

  return (
    <div className='header'>
      <Link to='/' className='link'>
        <h1 className='main-title'>BG Radio Stations</h1>
      </Link>
      <Link to='/fav' className='link fav-link'>
        Favorites
        <AiFillHeart className='fav-link-icon' />
        <span className='badge'>{items.length}</span>
      </Link>
    </div>
  )
}

export default Header
