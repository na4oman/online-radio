import data from './bg-radio.json'
import Card from './components/card/Card'
import './App.css'
import Search from './components/search/Search'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {
  const [filter, setFilter] = useState('')
  const [select, setSelect] = useState('')

  let filteredData = data.stations.filter(item =>
    item.radio_name.toLowerCase().includes(filter.toLowerCase())
  )

  if (select !== '')
    filteredData = data.stations.filter(
      item => item.genre.toLowerCase() === select.toLowerCase()
    )

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='main-title'>BG Radio Stations</h1>
        <Search setFilter={setFilter} setSelect={setSelect} />
        <div className='cards'>
          {filteredData.map(station => (
            <Card item={station} key={station.radio_id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
