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
        case "REDIRECT" :
            return {
                ...state,
                curPage : action.targetPage
            } 
        default :
            return state;
    }
}

export default authReducer;