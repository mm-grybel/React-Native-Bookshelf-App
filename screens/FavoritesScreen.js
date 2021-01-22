import React from 'react';

import { BOOKS } from '../data/dummy-data';
import BookList from '../components/BookList';

const FavoritesScreen = props => {
    // add temporary dummy data
    const favoriteBooks = BOOKS.filter(book => book.id === 'b1' || book.id === 'b2');
    return (
        <BookList 
            listData={favoriteBooks}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorites'
};

export default FavoritesScreen;
