import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
        }
    }
    componentWillMount() {
        const URL = 'http://localhost:8080/hello'
        fetch(URL, { mode: 'cors' })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    name: json['name'],
                    email: json['email']
                })
            });
    }
    render() {
        return <div>
            name: {this.state.name} <br />
            email: {this.state.email} <br />
        </div>
    }
}

export default Login