import * as LocalAuthentication from 'expo-local-authentication';
import React from 'react';
import { Text, View } from 'react-native';
export default function FingerPrint() {
    const success = response=>{
        console.log(response);
    };

    const error = response=>{
        console.log("error occured");
    };
    const promise = LocalAuthentication.hasHardwareAsync();
    promise.then(response=> {
        console.log(response);
    })
    promise.catch(error =>{
        console.log(error);
    })
    LocalAuthentication.supportedAuthenticationTypesAsync().then(success).catch(error)
    LocalAuthentication.authenticateAsync({
        cancelLabel: 'Cancel me',
        fallbackLabel: 'Fallback'
    }).then(success).catch(error)
    return(
        <View><Text>Test</Text></View>
    )
}