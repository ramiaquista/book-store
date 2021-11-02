import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';

const Book = (props) => {
  const { title, id } = props;
  return (
    <ListGroup.Item>
      {id}
      -
      {title}
      <Button variant="secondary">Remove</Button>
    </ListGroup.Item>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
