import React from 'react'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'
import data from '../../all-radio.json'
import { useState } from 'react'
import './All.css'
// import { useFav } from './context/favContext'

const All = () => {
  const [filter, setFilter] = useState('')
  const [select, setSelect] = useState('')
  // const { items } = useFav()

  let filteredData = data.stations.filter(item =>
    item.radio_name.toLowerCase().includes(filter.toLowerCase())
  )

  if (select !== '')
    filteredData = data.stations.filter(
      item => item.genre.toLowerCase() === select.toLowerCase()
    )

  return (
    <div className='home'>
      <Search setFilter={setFilter} setSelect={setSelect} />
      <div className='cards'>
        {filteredData.map(station => (
          <Card item={station} key={station.radio_id} />
        ))}
      </div>
    </div>
  )
}

export default All
