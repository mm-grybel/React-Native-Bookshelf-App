import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    ScrollView, 
    Image, 
    StyleSheet 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { BOOKS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';
import ListItem from '../components/ListItem';
import DefaultStyles from '../constants/default-styles';

const BookDetailScreen = props => {
    const bookId = props.navigation.getParam('bookId');
    const selectedBook = BOOKS.find(book => book.id === bookId);

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
