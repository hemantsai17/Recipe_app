import React from 'react';
import './Profile.css'; // Your CSS file to style the components

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useSelector } from 'react-redux';

const Profile = () => {
    // Replace these with your actual user data
    const user = {
        name: 'John Doe',
        username: 'johndoe123',
        bio: 'Frontend Developer | UI/UX Enthusiast',
        location: 'City, Country',
        avatar: 'https://example.com/avatar.jpg',
        followers: 1500,
        following: 120,
    };

    const favoriteObject = useSelector((state) => state.data);
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            <AppBar position="static">
                <Toolbar>
                    
                    <ArrowBackIosIcon onClick={() => navigate(-1)} />
                    
                    
                    {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
              {/* <MenuIcon />
            </IconButton> */}
                    <Typography variant="h6"  component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
                        My Profile
                    </Typography>
                    
                    <Button color="inherit" style={{ width: "100px" }} onClick={() => navigate("/")}>Logout</Button>
                </Toolbar>
            </AppBar>
            <div style={{width:"100%" , display:"flex" ,justifyContent:"space-evenly" }}>  

                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        margin: "2em",
                        borderRadius:"20px",
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <div className="profile-header" >
                        <div className="profile-avatar">
                            <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 , margin: 1 }} src="/static/images/avatar/1.jpg" />
                        </div>
                        <div className="profile-info">
                            <h1>{user.name}</h1>
                            <p>@{user.username}</p>
                            <p>{user.bio}</p>
                            <p>{user.location}</p>
                        </div>
                    </div>

                </Box>
                {/* <Box
                    sx={{
                        width: 300,
                        height: 300,
                         margin:"2em",
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >

                    <div className="profile-stats">
                        <div className="stat">
                            <span>{user.followers}</span>
                            <p>Followers</p>
                        </div>
                        <div className="stat">
                            <span>{user.following}</span>
                            <p>Following</p>
                        </div>
                        {/* Add more stats as needed */}
                   

                {/* </Box> */}
                

            </div>
            <Typography variant="h2" component="div">
                Favorites
                <VolunteerActivismIcon sx={{width:"auto", height:"50px"}}/>
            </Typography>
           
           
           
            
        </div>
    );
};

export default Profile;
