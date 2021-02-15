import { setStatusBarTranslucent, StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { ActivityIndicator,StyleSheet, Text, View,Button,FlatList} from 'react-native';
import {TextInput,Switch,ScrollView} from 'react-native-gesture-handler'
import APIService from '../Services/APIService'

export default function UserForm() {
  const [state,setState] = useState(
     {userForm: {name:"Sanjeev  Abcd" , age:"40" , isEnabled:true}, 
     users: [{name:"Sanjeev" }]}
  );
  const URL = 'https://6020a99646f1e400178034d2.mockapi.io/api/v1/users';

  (function()
     {
        console.log("Immediate invoke function was called.");
        const promise = APIService.getAllUsers();
        promise.then(response => response.json ()).then(users=> {
            setState({
                ...state,
                users: users
            })
        })
        promise.catch(error => {
            console.log(error);
        })

    }
  )();


  function saveUser(){
    //   const promise = fetch(URL,{
    //       method:'POST',
    //       headers: {
    //           'content-type' : 'application/json' 
    //       },
    //       body:JSON.stringify(state.userForm)
    //   })
    const promise = APIService.saveUser(state.userForm);
    promise.then(response => response.json())
                    .then(user => {
                     console.log(user);
                     state.users.push(user);
                     setState({...state,users:state.users});
                 }); 
    promise.catch(error => {
        console.log(error);
    })
            
  }

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
      <TextInput onChangeText={text=> setState({...state,name: text})} value={state.userForm.name} style={{borderColor:'red' , width:300, borderWidth: 2}}></TextInput>
      <TextInput onChangeText={text=> setState({...state, age:text})} value={state.userForm.age} style={{borderColor:'green' , width:300, borderWidth: 2}}></TextInput>
      <Button title = "Save" onPress={saveUser}></Button>

      <StatusBar style="dark" />
        {/* <ScrollView>
            {state.users.map((user,index) => {
                return <View style={styles.userRow}><Text>{user.name},{user.age}</Text>
                <Button title = "Delete" onPress={deleteUser.bind(this,index,user.id)}></Button>
                </View>
            })}
         </ScrollView> */}

        <FlatList
                data={state.users}
                renderItem={item=>{
                    return <View style={styles.userRow}><Text>{item.item.name},{item.item.age}</Text>
                    <Button title = "Delete" onPress={deleteUser.bind(this,item.index,item.item.id)}></Button>
                    </View>
                }}
                // keyExtractor={user => user.id}
            ></FlatList>

<ActivityIndicator color="#0000ff" style={styles.container} size="large"></ActivityIndicator>

      </ScrollView>
    </View>
  );

//   const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

//   const renderUser = ({ user }) => (
//      <Item Name={user.item.name} />
//   );
  function deleteUser(index,id){
    console.log(this);
    console.log(id);

    // const bVal = confirm(`Do you want to delete the user ${this.state.users[index].fname} ?`);
    // console.log(this);
    // console.log(index);
    // console.log("Delete button clicke/pressed !!");
    // console.log(bVal);
    // if(!bval){
    //     console.log("No delete done")
    // }
    const promise = APIService.deleteUser(id); 
    promise.then(response => {
        state.users.splice(index,1);
        //now render using setstate
        setState({...state,
            users: state.users
        });
        console.log(respone)})
    promise.catch(error => {console.log(error)}) 
}

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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  
});
