import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { BOOKS } from '../data/dummy-data';

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
        headerTitle: selectedBook.title
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
