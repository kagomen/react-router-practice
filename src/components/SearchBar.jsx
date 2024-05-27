import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-stone-200"
        />
        <button onClick={() => { navigate(`/search/${query}`) }} className="bg-stone-300">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar