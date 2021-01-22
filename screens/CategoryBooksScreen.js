import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, BOOKS } from '../data/dummy-data';
import BookItem from '../components/BookItem';

const CategoryBooksScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedBooks = BOOKS.filter(
        book => book.categoryIds.indexOf(catId) >= 0
    );

    const renderBookItem = itemData => {
        return (
            <BookItem 
                onSelect={() => {}}
                title={itemData.item.title} 
                author={itemData.item.author}
                //categoryIds
                releaseDate={itemData.item.releaseDate}
                language={itemData.item.language}
                publisher={itemData.item.publisher}
                imageUrl={itemData.item.imageUrl}
            />
        );
    };

    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => item.id} // newer versions of RN don't need this
                data={displayedBooks} 
                renderItem={renderBookItem}
                style={{width: '100%'}}
            />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryBooksScreen;
