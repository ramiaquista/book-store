import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CreateNewBook from './CreateNewBook';
import Book from './Book';
import './BookPageStyle.css';

const BooksPage = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <main>
      <section className="books-page">
        <h1>Books List</h1>
        <ListGroup>
          {books.map((book) => (
            <Book key={book.id} id={book.id} author={book.author} title={book.title} />
          ))}
        </ListGroup>
        <CreateNewBook />
      </section>
    </main>
  );
};

export default BooksPage;
