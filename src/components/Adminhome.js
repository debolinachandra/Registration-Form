import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Form.css';

const Adminhome = () => {
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
                setError(error)
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
                    <h2>Welcome {username}to Admin home page</h2>
                    <div className="data_table_style">
                        <table>
                            <thead>
                                <th>User name</th>
                                <th>Update User</th>
                                <th>Delete User</th>
                            </thead>

                            <tbody>
                                {
                                    userdata.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.username} </td>
                                            <td>update</td>
                                            <td>delete</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <input type="button" value="Create User" />
                    </div>
                </div>
            </>
        )
    }
}

export default Adminhome
