// SignupForm.js

import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword : ''
    });
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FD841F',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: "10px",
        
    };


    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.password, formData.confirmPassword);
        if (formData.password == formData.confirmPassword) {
            console.log(formData);
            navigate('/');
        } else {
            handleOpen();
           
        }
        
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <label>First Name</label>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <label>Last Name</label>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                </div>
                <div className="form-group">
                    <input
                        type="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <label>Confirm Password</label>
                </div>
                <button type="submit">Sign Up</button>
                <div style={{ display: "flex", justifyContent: "center", margin: "0.5em" , width:"100%" ,marginTop:"1em" }} > 
                    <Fab variant="extended" color="dark"
                        onClick={() => navigate('/')}>

                        Back to Login
                    </Fab>
                </div>
               
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Credentials error
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       Check if password or username are correct!!!!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default Signup;
