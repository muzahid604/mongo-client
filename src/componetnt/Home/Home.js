import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            our users:{users.length}
            <h1>user name or email</h1>
            <br />
            {
                users.map(user => <li>{user.name}:::::{user._id}:::::{user.email}</li>)
            }
        </div>
    );
};

export default Home; 