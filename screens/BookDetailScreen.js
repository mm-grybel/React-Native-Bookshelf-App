import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { BOOKS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const BookDetailScreen = props => {
    const bookId = props.navigation.getParam('bookId');
    const selectedBook = BOOKS.find(book => book.id === bookId);

    return (
        <View style={styles.screen}>
            <Text>{selectedBook.title}</Text>
            <Button 
                title="Go Back to Categories"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    );
};

BookDetailScreen.navigationOptions = navigationData => {
    const bookId = navigationData.navigation.getParam('bookId');
    const selectedBook = BOOKS.find(book => book.id === bookId);

    return {
        headerTitle: selectedBook.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite"
                    iconName="star"
                    onPress={() => {
                        console.log('Mark as favorite');
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BookDetailScreen;
