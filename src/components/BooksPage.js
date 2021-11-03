import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CreateNewBook from './CreateNewBook';
import Book from './Book';
import './BookPageStyle.css';

const BooksPage = () => {
  const books = useSelector((state) => state.booksReducer);
  const listbook = [];
  const idbooks = [];
  books.map((book) => idbooks.push(book[0]));
  books.map((book) => book[1].map((item) => listbook.push(item)));

  return (
    <main>
      <section className="books-page">
        <h1>Books List</h1>
        <ListGroup>
          {listbook.map((prop, index) => (
            <Book
              key={idbooks[index]}
              id={idbooks[index]}
              category={prop.category}
              title={prop.title}
            />
          ))}
        </ListGroup>
        <CreateNewBook />
      </section>
    </main>
  );
};

export default BooksPage;
