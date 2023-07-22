import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "../pages/Home.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import * as types from '../redux/actionTypes'
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import { Favorite } from '@mui/icons-material';
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




function Home() {
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")
    const [expanded, setExpanded] = React.useState(false);
    const [card, setCard] = useState('')

    const handleExpandClick = (index) => {
        setCard(index)
        setExpanded(!expanded);
    };

    const navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const { recipes } = useSelector(state => state.data);
    console.log("state", recipes)

    const updateSearch = () => {
        setQuery(search);
        setSearch("")
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const favorite = (e) => {
        handleClick()
        console.log(e.target)
    }

    var dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: types.FETCH_RECIPE_START, query })
        dispatch({ type: types.ADD_FAVORITES, query })
    }, [query])

    return (
        <div className="HomeApp">
            <AppBar position="static">
                <Toolbar>
                    <div onClick={() => navigate('/profile')}>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </div>
                    
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
                        My Food Recipe
                    </Typography>
                    
                    <Button color="inherit" onClick={()=> navigate('/')} style={{width:"100px"}}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1 }}>
               
            </Box>
            <div style={{
                display: "flex", width: "100%", alignItems: "center",
                justifyContent: "center", marginTop: "2em", borderRadius: "230%"
            }}>
                <Box 
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '60%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Search your recipe"
                        variant="outlined" type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Button variant="contained" sx={{
                        width:"2em"
                    }} onClick={updateSearch}>Search</Button>

                </Box>
               
            </div>

            <div style={{ margin: "2em" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {recipes && recipes.hits && recipes.hits.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>

                                <Card sx={{ maxWidth: 525 , borderRadius:"10%" }}>
                                    <CardHeader
                                        // avatar={
                                        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        //     R
                                        //   </Avatar>
                                        // }
                                        // action={
                                        //   <IconButton aria-label="settings">
                                        //     <MoreVertIcon />
                                        //   </IconButton>
                                        // }
                                        title={item.recipe.label}

                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.recipe.image}
                                        title={`Calories ${item.recipe.calories}`}
                                    />
                                    <CardContent>
                                        {/* <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography> */}
                                    </CardContent>
                                    <CardActions spacing sx={{display:"flex" , justifyContent:"space-evenly"}}>
                                        <Fab aria-label="like" style={{marginLeft:"0em"}} onClick={(e)=>favorite()}>
                                            <FavoriteIcon />
                                        </Fab>
                                      
                                        <ExpandMore
                                            expand={expanded}
                                            style={{width:"auto" ,marginLeft:"0em"}}
                                            onClick={() => handleExpandClick(index)}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={index === card && expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph variant='h5'>Ingredients:</Typography>

                                            {item.recipe.ingredients.map((m, index) => (

                                                <Typography paragraph>{`${index + 1}.`} {m.text} ,  {m.quantity} , {m.foodCategory} , {m.weight} {m.measure} </Typography>



                                            ))}


                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            <Stack spacing={2} sx={{ width: '100%' }}>
             
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Recipe added to Favorites
                    </Alert>
                </Snackbar>
               
              
            </Stack>
         

        </div>
    );
}

export default Home;