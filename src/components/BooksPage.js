import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreateNewBook from './CreateNewBook';
import Book from './Book';
import './BookPageStyle.css';

const BooksPage = () => {
  const [books] = useState([
    { id: 0, name: 'Cras justo odio' },
    { id: 1, name: 'Dapibus ac facilisis in' },
    { id: 2, name: 'Morbi leo risus' },
    { id: 3, name: 'Porta ac consectetur ac' },
    { id: 4, name: 'Vestibulum at eros' },
  ]);
  return (
    <main>
      <section className="books-page">
        <h1>Books List</h1>
        <ListGroup>
          {books.map((book) => (
            <Book key={book.id} id={book.id} name={book.name} />
          ))}
        </ListGroup>
        <CreateNewBook />
      </section>
    </main>
  );
};

export default BooksPage;
