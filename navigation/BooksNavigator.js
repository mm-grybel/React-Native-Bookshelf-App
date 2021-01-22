import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: 'black'
};

const BooksNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryBooks: CategoryBooksScreen,
        BookDetail: BookDetailScreen
    },
    {
        //initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        BookDetail: BookDetailScreen
    },
    {
        //initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Books: {
        screen: BooksNavigator, 
        navigationOptions: {
            tabBarLabel: 'Books',
            tabBarColor: Colors.sapphireColor, // this has effect when shifting: true below
            tabBarIcon: (tabInfo) => {
                return (
                    <FontAwesome name="book" size={25} color={tabInfo.tintColor} />
                );
            },
        }
    },
    Favorites: {
        screen: FavoritesNavigator, 
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarColor: Colors.accentColor, // this has effect when shifting: true below
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="star" size={25} color={tabInfo.tintColor} />
                );
            }
        }
    }
};

const BooksFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true
        }) 
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.sapphireColor
            }
        });

export default createAppContainer(BooksFavTabNavigator);
