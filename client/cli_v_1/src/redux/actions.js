const Redirect = (path) => {
    return {
        type : "REDIRECT",
        targetPage : path
    }
}

export default Redirect;