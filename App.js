import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {TextInput,Switch,ScrollView} from 'react-native-gesture-handler'
import UserForm from  './components/userform'

export default function App() {
  const [state,setState] = useState({name:"Sanjeev  Abcd" , age:"40" , isEnabled:true});
  //const [isEnabled,setIsEnabled] = useState(false);
   
  // toggleSwitch = (value)=>{
  //   setState({...state,isEnabled:value});

  // }
  return (
    <View style={styles.container}>
      <ScrollView>
      <UserForm></UserForm>
      </ScrollView>
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
