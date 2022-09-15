import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, Pressable, TextInput, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './BottomNavigator';

function Barberprofile() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.TopView}>
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.text}>Username:</Text>
            <Text style={styles.text}>Password:</Text>
            <Text style={styles.text}>Age:</Text>
            <Text style={styles.text}>Email:</Text>
        </View>
        <View style={styles.BottomView}>
        <Text style={styles.pricesText}>Prices</Text>
        <SafeAreaView style={styles.container}>
            <BottomNavigator style={styles.container}/>
        </SafeAreaView>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width: 180,
      borderRadius: 24,
      elevation: 3,
      backgroundColor: '#171774',
      marginTop: 11
    },
    container: {
        flex: 1, 
        width: "100%", 
        height: '100%', 
        justifyConent:'flex-end',
        top: 301,
        backgroundColor: 'white',
    },
    pricesText: {
      fontSize: 22,
      fontWeight: '900',
      letterspacing: 2,
      color: 'white',
      top: 20
      },
      
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: '500',
      letterSpacing: 2,
      color: 'black',
      margin: 16,
    },
    input: {
      height: 45,
      margin: 8,
      marginTop: 0,
      borderWidth: 1,
      padding: 10,
      width: 280,
      borderRadius: 20,
      backgroundColor: 'white'
    },
    smallInput: {
      height: 45,
      width: 280,
      magrin: 8,
      padding: 10,
      borderRadius: 20,
      backgroundColor: 'white',
      borderWidth: 1,
      bottom: 40
    },
    TopView: {
      width: '100%',
      height: '50%', 
      flex: 1,
      alignItems: 'left',
      justifyContent: 'center',
      marginLeft: 24,
    },
    BottomView: {
      width: '100%',
      height: '50%',
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: '#171774',
    },
  });

export default Barberprofile;