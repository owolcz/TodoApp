import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const List = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.circle}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
                {/* <Text style={styles.itemDate}>Date: {props.date}</Text> */}
            </View>

            <View style={styles.circular}></View>


        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 37,
        height: 37,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#D3D4D6',
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    itemDate: {


    },

    separator: {
        height: 2,
        width: '100%',
        marginTop: 10,
        alignSelf: 'stretch',
        backgroundColor: '#F5F5F5',

    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#61DEA4',
        marginLeft: 'auto',

    },
});

export default List;