
import { useParams, Link } from 'react-router-dom';
import dummyBooks from '../data/dummyBooks';

const BookDetails = () => {
  const { id } = useParams();
  const book = dummyBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div style={{ padding: '1rem' }}>
        <h2>Book not found</h2>
        <Link to="/books/All">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books/All">← Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
