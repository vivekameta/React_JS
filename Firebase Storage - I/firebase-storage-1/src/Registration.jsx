import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, set, onValue } from 'firebase/database';

function Registration() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showData, setShowData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newuserRef = ref(database, `usersdata/${name}`);
        set(newuserRef, { name, password })
            .then(() => {
                console.log('Data successfully added to Firebase');
                setName('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Error adding data: ', error);
            });
    };

    useEffect(() => {
        const userRef = ref(database, 'usersdata');
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userLists = Object.keys(data).map((key) => ({
                    name: key,
                    ...data[key],
                }));
                setShowData(userLists);
            } else {
                setShowData([]);
            }
        });
    }, []);

    return (
        <>
            <div className="container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="container">
                <h2>Registered Users</h2>
                <ul>
                    {showData.map((user, index) => (
                          <li key={index}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Registration;
