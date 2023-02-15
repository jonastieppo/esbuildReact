import React from "react";
import './sign-in.module.css'

function SignIn () {
    return (
        <div className="signInDiv">
            <a href="" className="signInButton">
            <img src="./src/header/sign-in/img/profile.svg" alt="" style={{width: '32px', height :'32px'}}/>
                Sign in
            </a>
        </div>
    )
}

export default SignIn