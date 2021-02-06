import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {TextInput} from 'react-native-gesture-handler'

export default function App() {
  const [state,setState] = useState({name:"Sanjeev" , age:"40"});
  
  return (
    <View style={styles.container}>
      <Text>This is ! </Text>
      <TextInput onChangeText={text=> setState({...state,name:text})} value={state.name} style={{borderColor:'red' , width:300, borderWidth: 2}}></TextInput>
      <TextInput onChangeText={text=> setState({...state,age:text})} value={state.age} style={{borderColor:'green' , width:300, borderWidth: 2}}></TextInput>
      <Button title = "Save 10" onPress={()=>{alert(`${state.name} is of age ${state.age}` ); 
      console.log("this is the console log")}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
