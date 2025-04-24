import React from 'react';
import BookCard from '../components/bookcard';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
  { id: 2, title: '1984', author: 'George Orwell', price: 15 },
];

function Books() {
  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Books;
