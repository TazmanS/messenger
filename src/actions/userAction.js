import {LOGIN_USER, 
        USER_EXIT, 
        USER_NEW_NAME,
        USER_NEW_MESS,
        USER_DEL_MESS,
        GET_CHAT} from './actionTypes'
import axios from 'axios'
import {store} from '../index'

export function RegisterNewUser(user){

    return async dispatch => {
        try{
            let res = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD-ctZejTPwiu35s4F7ZydNru1fl7mXQpg', user )
            let localId = res.data.localId
            let allUsers = await axios.get(`https://reactmessenger-d938e.firebaseio.com/users.json`)
            allUsers.data[localId] = {
                name: 'Пользователь',
                age: 20
            }

            await axios.put('https://reactmessenger-d938e.firebaseio.com/users.json', allUsers.data )
            
        } catch (e){
            console.log(e)
        }     
    }
}
  

export function LoginUser(userLogin){
    return async dispatch => {

        console.log(userLogin)

        let user = {}
        let chat = []

        try{
            const res = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD-ctZejTPwiu35s4F7ZydNru1fl7mXQpg', userLogin)
            user.id = res.data.localId

            localStorage.setItem('email', userLogin.email)
            localStorage.setItem('password', userLogin.password)

            let userOptions = await axios.get(`https://reactmessenger-d938e.firebaseio.com/users/${user.id}.json`)
            user.name = userOptions.data.name
            user.age  = userOptions.data.age

            localStorage.setItem('name', user.name)

            let chatArr = await axios.get(`https://reactmessenger-d938e.firebaseio.com/chat.json`)
            chat = chatArr.data

        } catch(e){
            console.log("Ошибка входа. Попробуйте снова")
            return false
        }
        dispatch({
            type: LOGIN_USER,
            user,
            chat
        })

    }
}

export function getChat(){

    let chat = []

    return async dispatch => {
        try{
            let chatArr = await axios.get(`https://reactmessenger-d938e.firebaseio.com/chat.json`)
            chat = chatArr.data
        } catch(e){
            console.log(e)
        }

        dispatch({
            type: GET_CHAT,
            chat
        })
        
    }
}


export function userExit(){
    return dispatch =>{
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('password')

        dispatch({
            type: USER_EXIT    
        })
        
    }
}

export function userNewName(newName){
    return async dispatch => {
        let id = store.getState().user.id

        let option = {
            name: newName
        }
        
        try{
            await axios.patch(`https://reactmessenger-d938e.firebaseio.com/users/${id}.json`, option)
           
        } catch(e){
            console.log(e)
        }    

        dispatch({
            type: USER_NEW_NAME,
            name: newName
        })
    }
} 

export function userNewMess(newMess){
    return async dispatch => {

        let name = store.getState().user.name

        let newMessPut = {name: name, text: newMess} 

        let newChat = []

        try{
            const res = await axios.get(`https://reactmessenger-d938e.firebaseio.com/chat.json`) 
            newChat = res.data
            newChat.push(newMessPut)
            await axios.put(`https://reactmessenger-d938e.firebaseio.com/chat.json`, newChat)

        } catch(e){
            console.log(e)
        }

        dispatch({
            type: USER_NEW_MESS,
            newChat
        })
    }
}

export function userDelMess(index){
    return async dispatch => {

        let newChat = []

        try{
            let chatArr = await axios.get(`https://reactmessenger-d938e.firebaseio.com/chat.json`)
            chatArr.data.splice(index, 1)
            newChat = chatArr.data

            await axios.put(`https://reactmessenger-d938e.firebaseio.com/chat.json`, newChat)


        } catch(e){
            console.log(e)
        }

        dispatch({
            type: USER_DEL_MESS,
            newChat
        })
    }
}

