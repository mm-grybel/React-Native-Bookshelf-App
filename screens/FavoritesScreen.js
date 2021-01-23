import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { BOOKS } from '../data/dummy-data';
import BookList from '../components/BookList';
import CustomHeaderButton from '../components/CustomHeaderButton';

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

FavoritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

export default FavoritesScreen;
