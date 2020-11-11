import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

 
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }
    submitHangler = (e) => {
        e.preventDefault()

        console.log(this.state) 

        axios.post("http://localhost:8989/api/auth/signin", this.state).then(response => {
            
            let data = response.data
            console.log(data)
            let username = data["username"];
            console.log(username)
            let email = data["email"]
            console.log(email)
        }).catch(error => {
            console.log(error)
        })
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHangler}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button type="submit" onClick={this.loginButton}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
