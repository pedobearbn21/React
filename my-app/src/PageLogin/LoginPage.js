import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {};
    }
    render() {
        return(
            <form className="Formlogin">
                <input type="text" name="Uname" placeholder ="Uname"></input>
                <input type="password" placeholder ="password"></input>
                <button type='submit' value='Submit'>Click me</button>
            </form>
        );
    }
}
function getform() {
    let v  = document.getElementsByClassName("Formlogin");
}
export default Login;