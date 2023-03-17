import React, { Suspense } from 'react'
import Card from '../../components/card/Card'
import Search from '../../components/search/Search'
import data from '../../uk.json'
import { useState } from 'react'
import './UK.css'
// import { useFav } from './context/favContext'

const UK = () => {
  const [filter, setFilter] = useState('')
  const [select, setSelect] = useState('')

  let filteredData = data?.stations?.filter(item =>
    item?.radio_name?.toString().toLowerCase().includes(filter.toLowerCase())
  )

  if (select !== '')
    filteredData = data?.stations?.filter(
      item => item?.genre?.toLowerCase() === select.toLowerCase()
    )

  return (
    <div className='home'>
      <Search setFilter={setFilter} setSelect={setSelect} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className='cards'>
          {filteredData.map(station => (
            <Card item={station} key={station.radio_id} />
          ))}
        </div>
      </Suspense>
      {/* <>
        {data.stations.map(item => (
          <p key={item.radio_id}>{item.genre}</p>
        ))}
      </> */}
    </div>
  )
}

export default UK
