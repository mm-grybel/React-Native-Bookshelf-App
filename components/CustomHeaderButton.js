import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={AntDesign} 
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : 'black'}
        />
    );
};

export default CustomHeaderButton;
