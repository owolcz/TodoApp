import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.circle}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
                <View style={styles.separator}></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
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
    itemRight: {},
    separator: {
        height: 2,
        width: '100%',
        marginTop: 20,
        alignSelf: 'stretch',
        backgroundColor: '#F5F5F5',

    },
});

export default Task;