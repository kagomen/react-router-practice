import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className='border-2 border-blue-500 my-1'>
          <Link to={`/data/${book.id}`}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No Author'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;