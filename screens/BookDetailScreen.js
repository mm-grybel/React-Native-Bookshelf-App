import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Book Detail Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BookDetailScreen;
