import React, { useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    Button, 
    ScrollView, 
    Image, 
    StyleSheet 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import ListItem from '../components/ListItem';
import DefaultStyles from '../constants/default-styles';
import { toggleFavorite } from '../store/actions/books';

const BookDetailScreen = props => {
    const availableBooks = useSelector(state => state.books.books)
    const bookId = props.navigation.getParam('bookId');
    const selectedBook = availableBooks.find(book => book.id === bookId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(bookId));
        // ALTERNATIVELY: 
        // dispatch(toggleFavorite(selectedBook.id));
    }, [dispatch, bookId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    return (
        <ScrollView>
            <Image source={{uri: selectedBook.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text style={DefaultStyles.title}>{selectedBook.title} by {selectedBook.author}</Text>
            </View>
            <View style={styles.details}>
                <Text style={DefaultStyles.bodyText}>{selectedBook.releaseDate}</Text>
                <Text style={DefaultStyles.bodyText}>{selectedBook.publisher}</Text>
                <Text style={DefaultStyles.bodyText}>{selectedBook.language.toUpperCase()}</Text>
            </View>
            <Text style={DefaultStyles.title}>Categories</Text>
            {selectedBook.categoryIds.map(category => (
                <ListItem key={category}>{category}</ListItem>
            ))}
            <View>
                <Button 
                    title="Go Back to Categories"
                    onPress={() => {
                        props.navigation.popToTop();
                    }}
                />
            </View>
        </ScrollView>
    );
};

BookDetailScreen.navigationOptions = navigationData => {
    const bookTitle = navigationData.navigation.getParam('bookTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');

    return {
        headerTitle: bookTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favorite"
                    iconName="star"
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    }
});

export default BookDetailScreen;
