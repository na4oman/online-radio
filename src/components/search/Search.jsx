import './Search.css'

const Search = ({ setFilter, setSelect }) => {
  const handleSearch = e => {
    setFilter(e.target.value)
  }

  const handleSelect = e => {
    setSelect(e.target.value)
  }

  return (
    <div className='search'>
      <div className='wrapper'>
        <input
          className='search-input'
          type='text'
          placeholder='Search station...'
          onChange={handleSearch}
        />
        <select className='select' onChange={handleSelect}>
          <option value=''>--- Please choose a genre ---</option>
          <option value='pop'>Pop</option>
          <option value='folk'>Pop Folk</option>
          <option value='rock'>Rock</option>
          <option value='decades'>Decades</option>
          <option value='Hip Hop'>Hip Hop</option>
          <option value='talk'>Talk</option>
          <option value='dance'>Dance</option>
          <option value='language'>Language</option>
          <option value='classical'>Classical</option>
          <option value='jazz'>Jazz</option>
          <option value='alternative'>Alternative</option>
          <option value='electronic'>Electronic</option>
          <option value='rnb'>RnB</option>
          <option value='Easy Listening'>Easy Listening</option>
        </select>
      </div>
    </div>
  )
}

export default Search
