
const newURL = 'https://6020a99646f1e400178034d2.mockapi.io/api/v1/users/'


export default class APIService{

     static deleteUser(id){
        console.log("About to delete user with and id=");
        console.log(newURL)
    
        return fetch(newURL+id,{
            method:'DELETE'
        })     
    }

    static getAllUsers(){
        console.log("Inside getAllUsers");
        return fetch(newURL,{
            method:'GET'
        })   
    }


    static saveUser(userform){
        console.log("Inside getAllUsers");
        return fetch(URL,{
            method:'POST',
            headers: {
                'content-type' : 'application/json' 
            },
            body:JSON.stringify(userform)
        })
    }
}