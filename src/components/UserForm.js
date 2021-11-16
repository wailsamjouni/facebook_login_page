import React from 'react'
import './UserForm.css'

function UserForm() {
    return (
        <div className="wrapper">
            <div className="container-form">
            <input className="user-name" type="email" placeholder="Email or phone number"/>
            <input className="password" type="password" placeholder="Password"/>
            <button className="login-btn">Log in</button>
            <h5><a href="#">Forgot password?</a></h5>
            <hr/>
            <button className="account-btn">Create new account</button>
        </div>

            <h5><a className="create-page" href="#">Create a Page</a> for a celebrity, brand or business.</h5>
        </div>
        
    )
}

export default UserForm
