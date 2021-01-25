import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import BooksNavigator from './navigation/BooksNavigator';
import booksReducer from './store/reducers/books';

// we call this first, before we run any JSX code
enableScreens();

const rootReducer = combineReducers({
  books: booksReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)} 
        onError={(err) => console.log(err)} 
      />
    );
  }
  
  return (
    <Provider store={store}>
      <BooksNavigator />
    </Provider>
  );
}
