
import './App.css'
import SearchBar from './components/SearchBar'
import BookData from './Data.json'

const App = () => {
  return (
    <div className='App'>
      <SearchBar placeholder='Enter a book name...' data={BookData} />
    </div>
  )
}

export default App
