import React from 'react';

const AddUser = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }

        //send data in server site
        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h1>please add </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' required placeholder='Enter your name' />
                <br />
                <input type="email" name='email' required placeholder='Enter your Email' />
                <br />
                <input type="submit" value="add this" />
            </form>
        </div>
    );
};

export default AddUser; 