import React from 'react';
import { Link } from 'react-router-dom';
import dummyBooks from '../data/dummyBooks';

const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy'];

const HomePage = () => {
  // Get top 3 popular books (you can change logic as needed)
  const popularBooks = dummyBooks
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📚 Welcome to the Online Library System</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Book Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <Link to={`/books/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>🔥 Popular Books</h2>
        {popularBooks.map((book) => (
          <div key={book.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <Link to={`/books/details/${book.id}`}>View Details</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
