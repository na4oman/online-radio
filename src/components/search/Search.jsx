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
          <option value='decades'>Decades</option>
          <option value='pop'>Pop</option>
          <option value='folk'>Pop Folk</option>
          <option value='rock'>Rock</option>
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
          <option value='country'>Country</option>
          <option value='religion'>Religion</option>
          <option value='community'>Community</option>
          <option value='african'>African</option>
          <option value='region'>Region</option>
          <option value='latin'>Latin</option>
          <option value='caribbean'>Caribbean</option>
          <option value='theme'>Theme</option>
          <option value='reggae'>Reggae</option>
          <option value='other'>Other</option>
          <option value='blues'>Blues</option>
          <option value='indian'>Indian</option>
        </select>
      </div>
    </div>
  )
}

export default Search
