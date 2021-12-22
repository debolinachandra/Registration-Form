import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Form.css';

const Userhome = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(true);
    const [userdata, setUserdata] = useState([]);
    const { username } = useParams();
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
    if (error)
        return <div>{error.message}</div>
    else if (isLoaded)
        return <div>still loading</div>
    else {
        return (
            <>
            <div className="main_content">
                    <h2>Welcome {username}to User home page</h2>
                    <div className="data_style">
                        {
                            userdata.map((item, i) => (
                                (username === item.username) && <p key={i}>{item.username}</p>
                            ))
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default Userhome
