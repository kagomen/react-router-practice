const BookDetail = ({ book }) => {
  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No Author'}</p>
    </div>
  );
};

export default BookDetail;
