import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>BookStore</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
