import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { setFilters } from '../store/actions/books';

const FiltersScreen = props => {
    const { navigation } = props;
    const [isBiography, setIsBiography] = useState(false);
    const [isThriller, setIsThriller] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            biography: isBiography,
            thriller: isThriller
        };

        dispatch(setFilters(appliedFilters));
    }, [isBiography, isThriller, dispatch]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch
                label='Biographies &amp; Memoirs'
                state={isBiography} 
                onChange={newValue => setIsBiography(newValue)}
            />
            <FilterSwitch 
                label='Mystery &amp; Thriller'
                state={isThriller}
                onChange={newValue => setIsThriller(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filter Books',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Save"
                    iconName="ios-save"
                    onPress={navigationData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    }
});

export default FiltersScreen;
