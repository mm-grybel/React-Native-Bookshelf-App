import { BOOKS } from '../../data/dummy-data';

const initialState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    favoriteBooks: []
};

const booksReducer = (state = initialState, action) => {
    return state;
};

export default booksReducer;
