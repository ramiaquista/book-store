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
      <div className="data-container">
        <span className="School-of">{category}</span>
        <span className="Title Text-Style-6">{title}</span>
        <span className="Suzanne-Collins">Suzanne Collins</span>
        <div className="btns-container">
          <Button variant="secondary">Comments</Button>
          <Button variant="secondary" onClick={deleteBookFromStore}>
            Remove
          </Button>
          <Button variant="secondary">Edit</Button>
        </div>
      </div>
      <div className="p-container">
        <div className="Oval-2" />
        <div className="percentage-container">
          <span className="-Percent-Complete">64%</span>
          <span className="Completed Text-Style-9">Completed</span>
        </div>
      </div>
      <div className="chapter-container">
        <span className="Current-Chapter">Current Chapter</span>
        <span className="Current-Lesson">Chapter 17</span>
        <Button variant="primary" className="Update-progress">
          UPDATE PROGRESS
        </Button>
      </div>
    </ListGroup.Item>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
