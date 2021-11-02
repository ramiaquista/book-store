import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const persistedState = localStorage.getItem('BookList')
  ? JSON.parse(localStorage.getItem('BookList'))
  : {};

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  localStorage.setItem('BookList', JSON.stringify(store.getState()));
});

export default store;
