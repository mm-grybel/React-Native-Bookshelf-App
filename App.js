import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
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
