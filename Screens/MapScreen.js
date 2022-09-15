import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import MapView, { Marker } from 'react-native-maps';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import BarberOptionCard from '../components/BarberOptionCard';
import CutsOptionCard from '../components/CutsOptionCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyConetnt: 'center' }}>
        <View style={styles.TopView}>
            {/* <TouchableOpacity>
            <Ionicons name="cut-outline"  size={24} color="black" style={{left: 150, bottom: 120}}/>
            </TouchableOpacity> */}
            <Map />
        </View>
        <View style={styles.BottomView}>
            <Stack.Navigator>
                <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name="BarberOptionCard"
                component={BarberOptionCard}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name="CutsOptionCard"
                component={CutsOptionCard}
                options={{
                    headerShown: false,
                }}
                />
            </Stack.Navigator>

            {/* <Text>test</Text>
            <TouchableOpacity style={styles.BottomContainer}>
                <Text style={{fontSize: 16, fontWeight: '500', letterSpacing: 2, color: '#171774'}}>BOOK BARBER</Text>
            </TouchableOpacity> */}
        </View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    TopView: {
        width: '100%',
        height: '50%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomView: {
        width: '100%',
        height: '50%',
        
    },
    
});