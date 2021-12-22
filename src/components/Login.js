import React, { useState, useEffect } from 'react'
import { Redirect, BrowserRouter as Router } from 'react-router-dom'
import '../Form.css';


const Login = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(true);
    const [userdata, setUserdata] = useState([]);
    let errorMsg = {};
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        fetch(`http://wejmfgesjrhgtfk`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsloaded(false);
                    setUserdata(result);
                }
            ),
            (error) => {
                setIsloaded(false);
                setError(error);

            }
    }, [])
    const changeHanlder = (e) => {

        setData({ [e.target.name]: e.target.value })

        if (!data.username) {
            errorMsg.username = "username is required"
        }
        if (!data.password) {
            errorMsg.password = "password is required"
        }
        else if (data.password.length < 6) {
            errorMsg.password = "password length should be proper";
        }

    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    if (error)
        return <div>{error.message}</div>
    else if (isLoaded)
        return <div>still loading</div>
    else {

        return (
            <>
            <div className="main_content">
                    <Router>
                    <div className="form_content">
                            <form onSubmit={submitHandler}>

                                <label>User Name</label>
                                <input type="text" name="username" value={data.username} onChange={changeHanlder} />
                                {
                                    errorMsg.username && <span>{errorMsg.username}</span>
                                }
                                {
                                    userdata.map((item, i) => (
                                        ((data.username === item.username) && (item.role == "admin")) ? <Redirect key={i} to={`/Adminhome/${data.username}`} /> : <Redirect to={`/Userhome/${data.username}`} />

                                    ))
                                }
                                <br /><label>Passsword</label>
                                <input type="text" name="password" value={data.password} onChange={changeHanlder} />
                                {
                                    errorMsg.password && <span>{errorMsg.password}</span>
                                }

                                <br /><input type="button" value="Login" />
                            </form>

                        </div>
                    </Router>
                </div>
            </>
        )
    }
}

export default Login



