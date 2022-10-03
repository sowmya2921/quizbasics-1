const initialState = {
    isLoggedIn:false
}

function reducer(state=initialState,action){
    if(action.type==="LOGGEDIN"){
        return {...state,isLoggedIn:true}
    }
    if(action.type==='LOGOUT'){
        return {...state,isLOggedIn:false}
    }
    return state
}
export default reducer