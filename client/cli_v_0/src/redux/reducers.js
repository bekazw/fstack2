import initState from "./initState";

const init = (state = initState, action) => {
    switch (action.type) {
        case "LOG_IN" : 
            return {
                curId : action.actId,
                curIp : action.actIp,
                curCook : action.actCook
            }
        default : 
            return state
    }
}
export default init;