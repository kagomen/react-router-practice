import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <div className="container mx-auto">
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;
