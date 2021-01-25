import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import BookList from '../components/BookList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = props => {
    const favoriteBooks = useSelector(state => state.books.favoriteBooks);

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
