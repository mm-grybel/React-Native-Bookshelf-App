import React from 'react';
import { useSelector } from 'react-redux';
 
import { CATEGORIES } from '../data/dummy-data';
import BookList from '../components/BookList';

const CategoryBooksScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const availableBooks = useSelector(state => state.books.filteredBooks);

    const displayedBooks = availableBooks.filter(
        book => book.categoryIds.indexOf(catId) >= 0
    );

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

export default CategoryBooksScreen;
