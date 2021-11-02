import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = () => {
    const bookToRemove = {
      id,
      title,
      author,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBook(bookToRemove));
  };

  return (
    <ListGroup.Item>
      {title}
      {'  -  '}
      {author}
      <Button variant="secondary" onClick={deleteBookFromStore}>
        Remove
      </Button>
    </ListGroup.Item>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
