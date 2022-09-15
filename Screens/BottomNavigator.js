import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomNavigator = () => {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.barTabView}>
                <Ionicons name="clipboard-outline" size={30} color="#171774"/>
                <Text>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barTabView}>
                <Ionicons name="alert-outline" size={30} color="#171774"/>
                <Text>Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barTabView}>
                <Ionicons name="cog-outline" size={30} color="#171774"/>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavigator;

const styles = StyleSheet.create({

    bottomBar: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    },
    barTabView: {
        marginTop: 3,
        color: '#171774',
        justifyConent: 'center',
        alignItems: 'center',
    }
});