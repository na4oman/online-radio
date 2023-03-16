import React from 'react'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'
// import data from '../../bg-radio.json'
import { useState } from 'react'
import './Favorite.css'
import { useFav } from '../../context/favContext'

const Favorite = () => {
  const [filter, setFilter] = useState('')
  const [select, setSelect] = useState('')
  const { items } = useFav()

  let filteredData = items.filter(item =>
    item.radio_name.toLowerCase().includes(filter.toLowerCase())
  )

  if (select !== '')
    filteredData = items.filter(
      item => item.genre.toLowerCase() === select.toLowerCase()
    )

  return (
    <div className='fav'>
      <Search setFilter={setFilter} setSelect={setSelect} />
      <div className='cards'>
        {items.length === 0 && <p>No favorite items.</p>}
        {items.length !== 0 &&
          filteredData.map(station => (
            <Card item={station} key={station.radio_id} />
          ))}
      </div>
    </div>
  )
}

export default Favorite
