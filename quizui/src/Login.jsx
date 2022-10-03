import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
function Login(props){
    var [user,setuser] = useState({
        username:'',
        password:''
    })
    var navigate = useNavigate()
    function login (){
        fetch("http://localhost:4500/login",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.message){
                alert("invalid credentials")
            }
            else{
                window.localStorage.setItem('token',data.token)
                props.dispatch({type:'LOGGEDIN'})
                navigate('/')
            }
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" onChange={(e)=>{setuser({...user,username:e.target.value})}}/>
            <input type="password" onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default connect(store=>store)(Login)