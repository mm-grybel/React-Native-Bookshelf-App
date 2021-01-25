import React from 'react';
import { View, Text, Switch, Platform, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{ true: Colors.sapphireColor }}
                thumbColor={Platform.OS === 'android' ? Colors.sapphireColor : ''}
                value={props.state} 
                onValueChange={props.onChange} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterSwitch;
