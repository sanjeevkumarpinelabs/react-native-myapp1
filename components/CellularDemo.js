import React from "react"
import { View } from "react-native"
import * as Cellular from 'expo-cellular'
import { createNativeWrapper } from "react-native-gesture-handler";

export default function CellularDemo(){
    console.log(Cellular.allowsVoip);
    console.log(Cellular.carrier);
    console.log(Cellular.isoCountryCode);
    
    return (
       <View></View>
    )
}