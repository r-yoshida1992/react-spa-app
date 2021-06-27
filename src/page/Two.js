import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

class Two extends React.Component{
    render(){
        return (
            <div>
                <Login />
                <Link to='/'>oneへ</Link>
            </div>
        )
    }
}

export default Two;