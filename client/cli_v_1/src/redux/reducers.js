import { combineReducers } from 'redux';

import authState from './authState';



const authReducer = (state = authState, action) => {
    switch (action.type) {
        case "LOG_IN" :
            return {
                ...state,
                authID : action.authID,
                authIP : action.authIP,
                authCook : action.authCook 
            }
        default :
            return state;
    }
}

const rootReducer = combineReducers({
    authReducer
});


export default rootReducer;