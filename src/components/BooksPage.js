import React from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import './BookPageStyle.css';

const BooksPage = () => (
  <main>
    <section className="books-page">
      <h1>Books List</h1>
      <ListGroup>
        <ListGroup.Item>
          Cras justo odio
          <Button variant="secondary">Remove</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          Dapibus ac facilisis in
          <Button variant="secondary">Remove</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          Morbi leo risus
          <Button variant="secondary">Remove</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          Porta ac consectetur ac
          <Button variant="secondary">Remove</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          Vestibulum at eros
          <Button variant="secondary">Remove</Button>
        </ListGroup.Item>
      </ListGroup>
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
    </section>
  </main>
);

export default BooksPage;
