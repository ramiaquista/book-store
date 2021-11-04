import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/cofigureStore';
import Books from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">BookStore CMS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">BOOKS</Nav.Link>
              <Nav.Link href="/categories">CATEGORIES</Nav.Link>
            </Nav>
          </Container>
          <i className="fas fa-user" />
        </Navbar>
      </header>
      <Switch>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
