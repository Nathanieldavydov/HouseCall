import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BookingConfirmation = () => {
    


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Text>You're Booking is Confirmed!</Text>
            <Text>You're Barber is on the way!</Text>
        </SafeAreaView>
    );
};

export default BookingConfirmation;