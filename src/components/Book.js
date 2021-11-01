import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';

const Book = (props) => {
  const { name, id } = props;
  return (
    <ListGroup.Item>
      {id}
      -
      {name}
      <Button variant="secondary">Remove</Button>
    </ListGroup.Item>
  );
};

Book.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
