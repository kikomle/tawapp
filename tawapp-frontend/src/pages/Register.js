import React, {useState} from 'react';
import axios from 'axios';

export default function Register() {
    const [form, setForm] = useState({username: "", email:"", password: ""});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/users/register", form);
            setMessage(res.data);
        } catch (err) {
            setMessage('Error');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" value={form.username} onChange={handleChange} /><br />
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
                <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} /><br />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    )
}