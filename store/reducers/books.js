import { BOOKS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/books';

const initialState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    favoriteBooks: []
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteBooks.findIndex(
                book => book.id === action.bookId
            );
            if (existingIndex >= 0) {
                const updatedFavBooks = [...state.favoriteBooks];
                updatedFavBooks.splice(existingIndex, 1);
                return {...state, favoriteBooks: updatedFavBooks };
            } else {
                const book = state.books.find(book => book.id === action.bookId);
                return {...state, favoriteBooks: state.favoriteBooks.concat(book)};
            }
        default:
            return state;
    }
};

export default booksReducer;
