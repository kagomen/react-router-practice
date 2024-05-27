import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList';
import axios from 'axios'

const SearchResultPage = () => {
  const { query } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    init()
  }, [query]);

  async function init() {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    setBooks(res.data.items || [])
    console.log(res.data)
  }

  return (
    <div className="container mx-auto">
      <BookList books={books} />
    </div>
  );
};

export default SearchResultPage;
