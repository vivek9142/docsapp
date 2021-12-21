import { Formik,Form } from "formik";
import InputField from "../../components/InputField/InputField.component";
import { userLogin} from "../../redux/actionCreators/userActionCr";
import { useDispatch } from "react-redux";
import {Button,makeStyles, Typography} from '@material-ui/core';

const Login = (props)=> {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
      <>
      <div className={classes.login_container}>
        <div className="login__container--header_container">
            <Typography variant='h3'>Login</Typography>
            <Typography variant='h6'>Login to unlock more features</Typography>
        </div>
        <div className={classes.login_container__formContainer}>
            <Formik initialValues={{
              email:'',
              password:''
            }} onSubmit={val => dispatch(userLogin(val))}>
              {formik => (
                <Form className={classes.formContainer}>
                  <InputField className={classes.InputField} variant='outlined' label='Email' type='email' size='small' name='email'/>
                  <InputField className={classes.InputField} variant='outlined' label='Password' type='password' size='small' name='password'/>
                  <Button color='primary' variant='contained' size='small' type='submit'>Submit</Button>
                </Form>
              )}
            </Formik>
        </div>
        
      </div>
      </>
    );

}

export default Login;

const useStyles = makeStyles(({
  login_container:{
    maxWidth: '30rem',
    margin: '10rem auto',
    background: '#c1c1c1',
    borderRadius: '0.5rem',
    padding:'1rem'
  },
  login_container__formContainer:{
    display: 'grid',
  },
  formContainer:{
    display: 'grid',
    padding: '1rem'
  },
  InputField:{
    margin:'1rem 0',
    background: '#fdfdfd'
  }
}));