import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
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

const BooksFavTabNavigator = createBottomTabNavigator(
    {
        Books: {
            screen: BooksNavigator, 
            navigationOptions: {
                tabBarLabel: 'Books',
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome name="book" size={25} color={tabInfo.tintColor} />
                    );
                }
            }
        },
        Favorites: {
            screen: FavoritesScreen, 
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="star" size={25} color={tabInfo.tintColor} />
                    );
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.sapphireColor
        }
    }
);

export default createAppContainer(BooksFavTabNavigator);
