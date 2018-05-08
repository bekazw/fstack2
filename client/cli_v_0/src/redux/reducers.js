import initState from "./initState";

const init = (state = initState, action) => {
    switch (action.type) {
        case "LOG_IN" : 
            return {
                curId : action.actId,
                curIp : action.actIp,
                curCook : action.actCook,
                curPage : 1
            }
        default : 
            return state
    }
}



export default init;