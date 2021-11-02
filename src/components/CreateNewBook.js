import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: 1,
      title: input,
      author: 'Me',
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add new book</Form.Label>
          <Form.Control
            value={input}
            onInput={(e) => setInput(e.target.value)}
            type="name"
            required
            placeholder="Book title"
          />
        </Form.Group>
        <Form.Select required aria-label="Default select example">
          <option>Category</option>
          <option value="1">Adventure</option>
          <option value="2">Classics</option>
          <option value="3">Horror</option>
        </Form.Select>
        <Button variant="primary" type="submit" onClick={submitBookToStore}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateNewBook;
