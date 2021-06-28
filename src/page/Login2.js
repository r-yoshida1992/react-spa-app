import React, { useState, Fragment } from 'react';

function AlertMessage(props) {
    const data = props.data

    return <div className="alert alert-primary h5 text-primary mt-5">
        <h3>result</h3>
        <hr />
        <table className="table h6">
            <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <td>
                        {data.name}
                    </td>
                </tr>
                <tr>
                    <th>
                        Mail
                    </th>
                    <td>
                        {data.email}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}


export default function Login2() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [form, setForm] = useState({
        name: 'no name',
        email: 'no mail',
    })

    const doChangeName = (event) => {
        setName(event.target.value)
    }

    const doChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const doSubmit = (event) => {
        const URL = 'http://localhost:8080/hello'
        let req = {
            name: name,
            email: email,
        }

        fetch(URL, { method: 'POST', mode: 'cors', headers: { "Content-Type": "application/json" }, body: JSON.stringify(req) })
            .then(res => res.json())
            .then(json => {
                setForm({ name: json['name'], email: json['email'] })
            });
        event.preventDefault()
    }

    return (<Fragment>
        <div className="container">
            <form onSubmit={doSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" onChange={doChangeName} />
                </div>
                <div className="form-group">
                    <label>EMail:</label>
                    <input type="text" className="form-control" onChange={doChangeEmail} />
                </div>
                <input type="submit" className="btn btn-primary mt-5" value="Click" />
            </form>
            <AlertMessage data={form} />
        </div>
    </Fragment>)
}