import * as LocalAuthentication from 'expo-local-authentication';
import React from 'react';
import { Text, View } from 'react-native';
export default function FingerPrint() {
    const success = response=>{
        console.log(response);
    };
    const promise = LocalAuthentication.hasHardwareAsync();
    promise.then(response=> {
        console.log(response);
    })
    LocalAuthentication.supportedAuthenticationTypesAsync().then(success)
    LocalAuthentication.authenticateAsync({
        cancelLabel: 'Cancel me',
        fallbackLabel: 'Fallback'
    }).then(success).catch(success)
    return(
        <View><Text>Test</Text></View>
    )
}