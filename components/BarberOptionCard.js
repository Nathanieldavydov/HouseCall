import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
    {
        id: "Haircut1",
        title: "Haircut",
        multiplier: 2.5,
        image: "https://content.latest-hairstyles.com/wp-content/uploads/french-crop-with-a-drop-fade-haircut-for-men.jpg"
    },
    {
        id: "Haircut2",
        title: "Beard Trim",
        multiplier: 1.3,
        image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/trimming-beard.jpg"
    },
    {
        id: "Haircut3",
        title: "Haircut + Beard",
        multiplier: 3.5,
        image: "https://i.pinimg.com/originals/cf/a4/fd/cfa4fdc3a10f4aae6e1a70e2d4210f72.jpg"
    },
]

const SURGE_CHARGE_RATE = 1.5;

const BarberOptionCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}>
                <Ionicons name="chevron-back-outline" color="#464690" size={30} style={{bottom: 20, left: 20}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center', fontSize: 18, left: 90, bottom: 45, fontWeight: '700', color: '#464690'}}>Select your Service - {travelTimeInformation?.distance.text}</Text>

            <FlatList data={data}
            keyExtractor={(item) => item.id} renderItem={({item}) => (
                <TouchableOpacity
                onPress={() => setSelected(item)}
                style={{flexDirection: 'row'}}>
                    <Image source={{ uri: item.image }} style={{width: 80, height: 80, borderRadius: '50%', backgroundColor: '#464690', opacity: 0.5, left: 20}}/>
                    <View style={{paddingTop: 15, paddingLeft: 10, left: 40}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#464690'}}>{item.title}</Text>
                        <Text style={{color: 'grey', paddingTop: 3}}>{travelTimeInformation?.duration.text} Until Arrival</Text>
                        <Text style={{ left: 155, top: -35, fontSize: 20, fontWeight: 'bold'}}>
                
                        {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(

                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100
                        )}

                        </Text>
                    </View>
                    
                </TouchableOpacity>
                
            )}
            />
            <View>
                <TouchableOpacity disabled={!selected} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#B9B9D5', width: 190, height: 28, borderRadius: 20, left: 103 }}>
                    <Text style={{color: '#464690', fontSize: 15}}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default BarberOptionCard;