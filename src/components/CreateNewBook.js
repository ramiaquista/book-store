import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const CreateNewBook = () => {
  const [titleInput, setTitleInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title: titleInput,
      category: categoryInput,
    };
    dispatch(createBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleInput && categoryInput) {
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
            value={categoryInput}
            onInput={(e) => setCategoryInput(e.target.value)}
            type="text"
            required
            placeholder="Category"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateNewBook;
