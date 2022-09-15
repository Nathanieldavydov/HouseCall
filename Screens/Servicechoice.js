import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';




const Servicechoice = ({ navigation }) => {
    const dispatch = useDispatch();

    
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 24, letterSpacing: 2, color: '#464690', fontWeight: '700', top: 40}}> Hello Nathaniel!</Text>
            <GooglePlacesAutocomplete
            placeholder='Where are you?' 
            
        styles={{
            container: {
                flex: 0,
                width: '90%',
                top: 80,
                position: 'fixed',
            },

            textInput: {
                fontSize: 18,
            }, 
            listView: {
                position: 'absolute',
                zIndex: 10
            }
        }}
        onPress={(data, details = null) => {
                console.log(data)
                console.log(details)
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                }))

                dispatch(setDestination(null))
        }}
        listViewDisplayed="auto"
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            />
        <View  style={styles.TopView}>
            <Image source={require('../images/barber.jpg')} style={{width: '100%', height: '100%', borderRadius: 20}}/>
        </View>
        <Text style={{top: 130, right: 80, fontSize: 16, color: 'white', fontWeight: '900'}} onPress={() => navigation.navigate('Map Screen')}>Barber</Text>
        <View style={styles.BottomView}>
            <Image source={require('../images/hairdresser.jpg')} style={{width: '100%', height: '100%', borderRadius: 20}}/>
            
        </View>
        <Text style={{bottom: 110, left: 80, fontSize: 16, color: 'white', fontWeight: '900'}} onPress={() => navigation.navigate('Map Screen')}>Hairdresser</Text>

    
        </View>
    )
}

export default Servicechoice;

const styles = StyleSheet.create({
    TopView: {
        width: '40%%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#377B96',
        margin: 10,
        right: 80,
        top: 250,

    },
    BottomView: {
        width: '40%',
        height: '30%',
        backgroundColor: '#377B96',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
        left: 80,
        top: 12
    },
    
});