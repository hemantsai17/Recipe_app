import React, { useState } from 'react';
import './Login.css'; // Import the custom CSS file
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here, e.g., send the credentials to the server for verification.
        console.log('Username:', username);
        console.log('Password:', password);
        // You can add more sophisticated login logic, like API calls, authentication, etc.
    };

    const login = () => {
        if (username && password) {
            navigate('/home')
        }
    }

    const signup = (event) => {
        event.preventDefault();
            navigate('/signup')
        
    }


    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        placeholder='Username'
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder='Password'
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                {/* <button type="submit" onClick={login}>Login</button> */}
                <Fab color="primary" aria-label="edit" variant='extended'
                    style={{ display: "flex", justifyContent: "center", width: "100%" }}
                    onClick={login}>
                    Login
                </Fab>
                <Typography variant='h6'>Not a user? Sign up from here</Typography>
                
                <Fab variant="extended" color="secondary"
                    style={{ display: "flex", justifyContent: "center", width: "100%" }} onClick={signup}>
                
                    Sign UP
                </Fab>
            </form>
        </div>
    );
};

export default Login;
