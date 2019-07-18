import {LOGIN_USER, 
        USER_EXIT, 
        USER_NEW_NAME,
        USER_NEW_MESS} from '../actions/actionTypes'

const initialState = {
    
    id: '', 
    name: "Пользователь",
    age: '25',
    chat: [],
    userIndicator: false

}

//giJ5Oz52O4YSVEafOUuAbJ0AkEF3
const usersReducers = (state = initialState, action) => {

    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                id: action.user.id,
                name: action.user.name,
                age: action.user.age,
                chat: action.chat,
                userIndicator: true
            }

        case USER_EXIT:
            return{
                ...state,
                userIndicator: false,
                id: ''
            }     
            
        case USER_NEW_NAME:
            return{
                ...state,
                name: action.name
            } 
            
        case USER_NEW_MESS:
            return{
                ...state,
                chat: action.newChat
            }    


        default: return state
    }
    
}

export default usersReducers