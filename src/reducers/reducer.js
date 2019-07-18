import {combineReducers} from 'redux'

import usersReducers from './usersReducers'

const reducer = combineReducers({
    user: usersReducers
})

export default reducer