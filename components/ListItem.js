import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultStyles from '../constants/default-styles';

const ListItem = props => {
    return (
        <View style={styles.listIem}>
            <Text style={DefaultStyles.bodyText}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listIem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default ListItem;
