import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import * as SMS from "expo-sms";
export default function SMS1(){

    function sendMessage(){
        (async()=>{
          const {result} =  await SMS.sendSMSAsync()('1234567890','Test Message Sent', {})
        })();
    }
    return (
        <Button onPress={sendMessage} title='send message'></Button>
    )
}
