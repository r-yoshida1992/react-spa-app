import React from 'react';
import { Link } from 'react-router-dom';

class One extends React.Component{
    render(){
        return (
            <div>
                test_one<br/>
                <Link to='/two'>twoへ</Link> <br></br>
            </div>
        )
    } 
}

export default One;