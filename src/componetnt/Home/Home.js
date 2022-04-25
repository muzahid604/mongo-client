import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = id => {
        const des = window.confirm('are you sure to delete it')
        if (des) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('delete')
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }

    }
    return (
        <div>
            our users:{users.length}
            <h1>user name or email</h1>
            <br />
            {
                users.map(user =>
                    <li
                        key={user._id}
                    >{user.name}::::::::::{user.email} <button onClick={() => handleDelete(user._id)}>X</button></li>

                )

            }
        </div>
    );
};

export default Home; 