import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
// import store from '../redux/cofigureStore';
import CreateNewBook from './CreateNewBook';
import Book from './Book';
import './BookPageStyle.css';

const BooksPage = () => {
  const [books] = useState([
    { id: 0, title: 'Cras justo odio', author: '' },
    { id: 1, title: 'Dapibus ac facilisis in', author: '' },
    { id: 2, title: 'Morbi leo risus', author: '' },
    { id: 3, title: 'Porta ac consectetur ac', author: '' },
  ]);
  // const [books] = useState([store]);
  return (
    <main>
      <section className="books-page">
        <h1>Books List</h1>
        <ListGroup>
          {books.map((book) => (
            <Book key={book.id} id={book.id} title={book.title} />
          ))}
        </ListGroup>
        <CreateNewBook />
      </section>
    </main>
  );
};

export default BooksPage;
