import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/Open-Sans-Regular.ttf'),
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
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({

});
