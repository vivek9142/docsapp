import { Formik,Form } from "formik";
import InputField from "../../components/InputField/InputField.component";
import { userRegister } from "../../redux/actionCreators/userActionCr";
import { useDispatch } from "react-redux";
import {Button,makeStyles, Typography} from '@material-ui/core';
import Loading from "../../components/Loading/Loading.component";

const Register = (props)=> {
  const classes = useStyles();
  const dispatch = useDispatch();
    return (
      <>
      <Loading/>
        <div className={classes.register_container}>
        <div className="login__container--header_container">
            <Typography variant='h3'>Register</Typography>
            <Typography variant='h6'>Welcome to our App!</Typography>
        </div>
        <div className={classes.register_container__formContainer}>
            <Formik initialValues={{
              name:'',
              email:'',
              phone:'',
              password:''
            }} onSubmit={async val => {await dispatch(userRegister(val));await props.history.goBack();}}>
              {formik => (
                <Form className={classes.formContainer}>
                  <InputField className={classes.InputField} variant='outlined' label='Name' type='text' size='small' name='name'/>
                  <InputField className={classes.InputField} variant='outlined' label='Email' type='email' size='small' name='email'/>
                  <InputField className={classes.InputField} variant='outlined' label='Phone' type='number' size='small' name='phone'/>
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

export default Register;


const useStyles = makeStyles(({
  register_container:{
    maxWidth: '30rem',
    margin: '6rem auto',
    background: '#c1c1c1',
    borderRadius: '0.5rem',
    padding:'1rem'
  },
  register_container__formContainer:{
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