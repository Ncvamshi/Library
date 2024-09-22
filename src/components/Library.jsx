import React from 'react';
import { useState, useEffect } from 'react';
import './Library.css'; // Import the CSS file for Library component

export default function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4005/api/books/');
      const json = await response.json();
      setBooks(json);
    };
    fetchData();
  }, []);

  return (
    <div className="library">
      <h1>Library</h1>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <img src={book.coverPhoto || 'default-cover.jpg'} alt={book.name} className="book-cover" />
            <div className="book-details">
              <div className="book-name">{book.name}</div>
              <div className="book-author">{book.author}</div>
              <div className="book-year">{book.year_published}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
