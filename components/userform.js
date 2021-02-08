import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {TextInput,Switch,ScrollView} from 'react-native-gesture-handler'

export default function UserForm() {
  const [state,setState] = useState(
     {userForm: {name:"Sanjeev  Abcd" , age:"40" , isEnabled:true}, 
     users: [{name:"Sanjeev" }]}
  );
  const URL = 'https://6020a99646f1e400178034d2.mockapi.io/api/v1/users';

  function saveUser(){
      const promise = fetch(URL,{
          method:'POST',
          headers: {
              'content-type' : 'application/json' 
          },
          body:JSON.stringify(state.userForm)
      })
      promise.then(response => response.json())
                    .then(user => {
                     console.log(user);
                     state.users.push(user);
                     setState({...state,users:state.users});
                 }); 
            
  }

//   function getUsers(){
//     const promise = fetch(URL,{
//         method:'GET',
//         headers: {
//             'content-type' : 'application/json' 
//         },
//         body:JSON.stringify(state)
//     })
//     promise.then(response => {
//             res
//             console.log(respone)}
//     )
//            .catch(error => {
//               console.error('Error:', error);
//             });
// }
  return (
    <View style={styles.container}>
      <ScrollView>
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setState({...state,isEnabled:value})}
        value={state.isEnabled}
      />
      <Text>This is ! </Text>
      <TextInput onChangeText={text=> setState({...state.userForm,name: text})} value={state.userForm.name} style={{borderColor:'red' , width:300, borderWidth: 2}}></TextInput>
      <TextInput onChangeText={text=> setState({...state.userForm, age:text})} value={state.userForm.age} style={{borderColor:'green' , width:300, borderWidth: 2}}></TextInput>
      <Button title = "Save" onPress={saveUser}></Button>

      <StatusBar style="dark" />
        <ScrollView>
            {state.users.map((user,index) => {
                return <View style={styles.userRow}><Text>{user.name},{user.age}</Text></View>
            })}
            </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    userRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor:'#d2f455'
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
