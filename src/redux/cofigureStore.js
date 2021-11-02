import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const persistedState = localStorage.getItem('BookList')
  ? JSON.parse(localStorage.getItem('BookList'))
  : [];

const store = createStore(booksReducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  localStorage.setItem('BookList', JSON.stringify(store.getState()));
});

export default store;
