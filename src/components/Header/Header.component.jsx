import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core/';
import { useDispatch,useSelector } from "react-redux";
import { userLogout } from "../../redux/actionCreators/userActionCr";
// import Button from "../Button/Button.component";

const Header = () => {
    const classes = useStyles();

    const user = useSelector(state => state.user.loggedInUser);
    const dispatch = useDispatch();
    console.log(user);
    return(
        <>
        <AppBar position='static' className={classes.navContainer}>
                <Toolbar className={classes.content_container}>
                    
                    <Typography variant='h5'>DocsApp</Typography>
                    
                    {user && Object.keys(user).length===0 ?
                    (<></>):
                    (<Typography variant='h6'>{`Hello ${user}`}</Typography>)
                    }
                    <Button disableElevation variant="contained" size='small' onClick={()=>dispatch(userLogout())}>Logout</Button>
                </Toolbar>
        </AppBar>
        </>
    )
}

export default Header;

const useStyles = makeStyles(({
    navContainer:{
        flexGrow:1
    },
    content_container:{
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
