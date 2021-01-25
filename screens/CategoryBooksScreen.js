import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
 
import { CATEGORIES } from '../data/dummy-data';
import BookList from '../components/BookList';
import DefaultStyles from '../constants/default-styles';

const CategoryBooksScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const availableBooks = useSelector(state => state.books.filteredBooks);
    const displayedBooks = availableBooks.filter(
        book => book.categoryIds.indexOf(catId) >= 0
    );

    if (displayedBooks.length === 0) {
        return (
            <View style={styles.content}>
                <Text style={DefaultStyles.bodyText}>No books found, maybe check your filters?</Text>
            </View>
        );
    }

    return (
        <BookList 
            listData={displayedBooks}
            navigation={props.navigation}
        />
    );
};

CategoryBooksScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title      
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryBooksScreen;
