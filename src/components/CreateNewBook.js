import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: titleInput,
      author: authorInput,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleInput || authorInput) {
      submitBookToStore();
    }
  };

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add new book</Form.Label>
          <Form.Control
            value={titleInput}
            onInput={(e) => setTitleInput(e.target.value)}
            type="text"
            required
            placeholder="Book title"
          />
          <Form.Control
            value={authorInput}
            onInput={(e) => setAuthorInput(e.target.value)}
            type="text"
            required
            placeholder="Book Author"
          />
        </Form.Group>
        <Form.Select required aria-label="Default select example">
          <option>Category</option>
          <option value="1">Adventure</option>
          <option value="2">Classics</option>
          <option value="3">Horror</option>
        </Form.Select>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateNewBook;
