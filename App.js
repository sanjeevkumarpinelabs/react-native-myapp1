import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {TextInput,Switch,ScrollView} from 'react-native-gesture-handler'
import UserForm from  './components/userform'
import ContactList from './components/contactList';
import SMS1 from "./components/SMS";
import LocationComponent from "./components/Location";
import FingerPrint from "./components/fingerprint-auth"
import Cellular from "./components/CellularDemo"

export default function App() {
  const [state,setState] = useState({name:"Sanjeev  Abcd" , age:"40" , isEnabled:true});
  //const [isEnabled,setIsEnabled] = useState(false);
   
  // toggleSwitch = (value)=>{
  //   setState({...state,isEnabled:value});

  // }
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <UserForm></UserForm> */}
      {/* <ContactList></ContactList> */}
      {/* <LocationComponent></LocationComponent> */}
        {/* <FingerPrint></FingerPrint> */}
        {/* <Userform></Userform> */}
        {/* <ContactList></ContactList> */}
        {/* <SMS1></SMS1> */}

        <Cellular></Cellular>
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
