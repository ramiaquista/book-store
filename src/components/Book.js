import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';

const Book = (props) => {
  const { id, title, category } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = () => {
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(removeBookAPI(id));
  };

  return (
    <ListGroup.Item>
      {title}
      {'  -  '}
      {category}
      <Button variant="secondary" onClick={deleteBookFromStore}>
        Remove
      </Button>
    </ListGroup.Item>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
