import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import BookItem from '../components/BookItem';

const BookList = props => {
    const favoriteBooks = useSelector(state => state.books.favoriteBooks);
    const renderBookItem = itemData => {
        const isFavorite = favoriteBooks.find(book => book.id === itemData.item.id);
        // ALTERNATIVELY:
        // const isFavorite = favoriteBooks.some(book => book.id === itemData.item.id);
        return (
            <BookItem 
                title={itemData.item.title} 
                author={itemData.item.author}
                releaseDate={itemData.item.releaseDate}
                language={itemData.item.language}
                publisher={itemData.item.publisher}
                imageUrl={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'BookDetail',
                        params: {
                            bookId: itemData.item.id,
                            bookTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    });
                }}
            />
        );
    };

    return (
        <View styles={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderBookItem}
                style={{width: '100%'}}   
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BookList;
