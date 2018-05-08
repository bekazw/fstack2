const LogIn = (id, ip, cook) => {
    return {
        type : "LOG_IN",
        actId : id,
        actIp : ip,
        actCook : cook
    }
}

export default LogIn;