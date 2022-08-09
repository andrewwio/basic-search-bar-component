import { useState } from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'


const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [textTyped, setTextTyped] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setTextTyped(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setTextTyped("")
  }

  return (
    <div className='search'>
      <div className='search-inputs'>
        <input 
          type='text' 
          placeholder={placeholder}
          value={textTyped}
          onChange={handleFilter}
        />
        <div className='search-icon'>
          {(textTyped.length === 0 ) ? (
            <FontAwesomeIcon icon={faSearch} />
            ) : (
            <FontAwesomeIcon 
              icon={faClose} 
              id="clear-btn" 
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      { filteredData.length !== 0 && (
        <div className='data-result'>
          {filteredData.slice(0, 19).map((value, key) => {
            return <a 
            className='data-item' 
            href={value.link} 
            target='_blank'
            rel='noreferrer'
            >{value.title}</a>
        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar