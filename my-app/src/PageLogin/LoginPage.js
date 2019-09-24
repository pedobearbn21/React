import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            Uname:'didnt change',
            password:0
        };
        this.getform = this.getform.bind(this);
    }
    getform() {
        const data = document.getElementById("input1").value ;
        this.setState({
            Uname: data,
            password: 1234
        })
    }
    render() {
        return(
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Login;