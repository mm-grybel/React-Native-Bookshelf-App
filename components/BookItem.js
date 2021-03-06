import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ImageBackground,
    StyleSheet 
} from 'react-native';

import DefaultStyles from '../constants/default-styles';

const BookItem = props => {
    return (
        <View style={styles.bookItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View>
                    <View style={{...styles.bookRow, ...styles.bookHeader}}>
                        <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title} by {props.author}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.bookRow, ...styles.bookDetails}}>
                        <Text style={DefaultStyles.bodyText}>{props.releaseDate}</Text>
                        <Text style={DefaultStyles.bodyText}>{props.publisher}</Text>
                        <Text style={DefaultStyles.bodyText}>{props.language.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bookHeader: {
        height: '85%'
    },
    bookDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bookItem: {
        margin: 15,
        height: 200,
        width: '90%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    bookRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
});

export default BookItem;
