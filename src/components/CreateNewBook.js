import React from 'react';
import { Form } from 'react-bootstrap';

const CreateNewBook = () => (
  <div className="form-container">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add new book</Form.Label>
        <Form.Control type="email" placeholder="Book title" />
      </Form.Group>
      <Form.Select aria-label="Default select example">
        <option>Category</option>
        <option value="1">Adventure</option>
        <option value="2">Classics</option>
        <option value="3">Horror</option>
      </Form.Select>
    </Form>
  </div>
);

export default CreateNewBook;
