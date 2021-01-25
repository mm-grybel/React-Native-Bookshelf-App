import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import BookList from '../components/BookList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = props => {
    const favoriteBooks = useSelector(state => state.books.favoriteBooks);

    if (favoriteBooks.length === 0 || !favoriteBooks) {
        return (
            <View style={styles.content}>
                <Text c>No favorite books found. Start adding some!</Text>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;
