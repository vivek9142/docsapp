import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core/';
import { useDispatch,useSelector } from "react-redux";
import { userLogout } from "../../redux/actionCreators/userActionCr";
import {Link} from "react-router-dom";

const Header = () => {
    const classes = useStyles();

    const user = useSelector(state => state.user.loggedInUser);
    const dispatch = useDispatch();
    console.log(user);
    return(
        <>
        <AppBar position='static' className={classes.navContainer}>
                <Toolbar className={classes.content_container}>
                    
                    <Link to='/'>
                        <Typography variant='h5'>DocsApp</Typography>
                    </Link>
                    
                    {user && Object.keys(user).length===0 ?
                    (<div spacing='2'>
                    <Link to='/login'><Button disableElevation variant='contained' >Login</Button></Link>
                    <Link to='/Register'><Button disableElevation variant='contained' color="secondary">Register</Button></Link>
                    </div>):
                    (<>
                        <Typography variant='h6'>{`Hello ${user}`}</Typography>
                        <Button disableElevation variant="contained" size='small' onClick={()=>dispatch(userLogout())}>
                            Logout
                        </Button>
                    </>)
                    }
                    
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
