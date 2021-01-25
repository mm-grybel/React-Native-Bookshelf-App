import React from 'react';
import { Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBooksScreen from '../screens/CategoryBooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Books</Text> : 'Books',
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
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites',
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
        ? createMaterialBottomTabNavigator(tabScreenConfig, {  // Android
            activeColor: 'white',
            shifting: true
        }) 
        : createBottomTabNavigator(tabScreenConfig, {   // iOS
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: Colors.sapphireColor
            }
        });

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator(
    {
        BookFavorites: 
        {
            screen: BooksFavTabNavigator, 
            navigationOptions: {
                drawerLabel: 'Books'
            }
        },
        Filters: 
        {
            screen: FiltersNavigator,
            navigationOptions: {
                drawerLabel: 'Filters'
            }
        }
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);
