import React from 'react';

function BookCard({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>${book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookCard;
