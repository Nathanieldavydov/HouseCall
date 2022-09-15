import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // console.log(setDestination)
    return (
        <SafeAreaView style={{backgroundColor: '#E8E8F1', height: '100%'}}>
            <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 20, color: '#5D5D9E'}}>Good Afternoon!</Text>
            <View>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder="Where to?"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })
                        );
                        navigation.navigate('BarberOptionCard')
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("BarberOptionCard")} style={{ position: 'absolute', bottom: 0, left: 138, top: 240, flexDirection: 'row', backgroundColor: '#464690', width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
                    <Ionicons name="cut-outline" size={24} color="white"/>
                    <Text style={{color: 'white', fontSize: 18, padding: 5}}>Cuts</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: '#E8E8F1',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#D1D1E3',
        borderRadius: 20,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    listView: {
        position: 'absolute',
        zIndex: 10
    }
});