import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridListTile from '../components/CategoryGridListTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridListTile
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryBooks',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id} // newer versions of RN don't need this
            data={CATEGORIES} 
            renderItem={renderGridItem}
            numColumns={2} 
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Book Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
