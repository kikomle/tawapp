import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/users/login', form);
            localStorage.setItem('token', res.data.token); // Store token
            setMessage('Login successful');
            // Optionally redirect to /tasks or dashboard
        } catch (err) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} /><br />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}