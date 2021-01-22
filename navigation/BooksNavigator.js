import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import Colors from '../constants/Colors';

const BooksNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryBooks: CategoryBooksScreen,
        BookDetail: BookDetailScreen
    },
    {
        initialRouteName: 'Categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
            },
            headerTintColor: 'black'
        }
    }
);

export default createAppContainer(BooksNavigator);