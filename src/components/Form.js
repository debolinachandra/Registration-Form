import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Login from './Login'
import '../Form.css';
const Form = () => {
    let error = {};
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        admin: "",
        user: ""
    });
    const changeHanlder = (e) => {
        setData({ [e.target.name]: e.target.value })
        if (!data.firstname) {
            error.firstname = "first name is required"
        }
        if (!data.lastname) {
            error.lastname = "last name is required"
        }

        if (!data.username) {
            error.username = "username is required"
        }
        if (!data.email) {
            error.email = "email is required"
        }

        else if (!/\s+#\s+\.\s+/.test(data.email)) {
            error.email = "email is invalid"
        }
        if (!data.password) {
            error.password = "password is required"
        }
        else if (data.password.length < 6) {
            error.password = "password length should be proper";
        }
        if (!data.admin || !data.user) {
            error.gender = "role is required";
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="main_content">
                <div className="form_content">
                    <form onSubmit={submitHandler}>
                        <label>First Name</label>
                        <input type="text" name="firstname" value={data.firstname} onChange={changeHanlder} />
                        {
                            error.firstname && <span>{error.firstname}</span>
                        }
                        <br /><label>Last Name</label>
                        <input type="text" name="lastname" value={data.lastname} onChange={changeHanlder} />
                        {
                            error.lastname && <span>{error.lastname}</span>
                        }
                        <br /><label>User Name</label>
                        <input type="text" name="username" value={data.username} onChange={changeHanlder} />
                        {
                            error.username && <span>{error.username}</span>
                        }

                        <br /><label>Passsword</label>
                        <input type="text" name="password" value={data.password} onChange={changeHanlder} />
                        {
                            error.password && <span>{error.password}</span>
                        }

                        <br /><label>Role</label>
                        <input type="checkbox" name="admin" value={data.admin} onChange={changeHanlder} />Admin
                        <input type="checkbox" name="user" value={data.user} onChange={changeHanlder} />User
                        {
                            error.role && <span>{error.role}</span>
                        }

                        <br /><input type="button" value="Registration" />

                    </form>
                </div>
                <div className="login_link_style">
                    <Router>
                        <NavLink exact activeClassName="active_class" to="/login">Login</NavLink><br />
                        <Routes>
                            <Route exact path="/login" component={Login} />
                        </Routes>
                    </Router>
                </div>


            </div>
        </>
    )
}

export default Form



