const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCES = 'FETCH_BOOKS_SUCCES';
const APP_ID = 'XgrI7uiPFtH4mdFCRqco';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooksAction = (payload) => ({
  type: 'FETCH_BOOKS_SUCCES',
  payload,
});

export const fetchBooks = () => (dispatch) => fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fetchBooksAction(Object.entries(data)));
  })
  .catch(() => {
    // do nothing
  });

export const createBook = (newBook) => (dispatch) => fetch(BASE_URL, {
  method: 'POST',
  body: JSON.stringify(newBook),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.status)
  .then((data) => {
    if (data === 201) {
      dispatch(addBook(newBook));
    }
  });

export const removeBookAPI = (bookToDelete) => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books/${bookToDelete}`, {
  method: 'DELETE',
  body: JSON.stringify({
    item_id: bookToDelete,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.text())
  .then((data) => {
    if (data === 'The book was deleted successfully!') {
      dispatch(removeBook(bookToDelete));
    }
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCES:
      return action.payload;
    case ADD_BOOK: {
      const newBookFormated = [
        action.payload.item_id,
        [{ category: action.payload.category, title: action.payload.title }],
      ];
      return [...state, newBookFormated];
    }

    case REMOVE_BOOK: {
      const newState = state.filter((book) => book[0] !== action.payload);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
