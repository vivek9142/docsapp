import { Formik,Form } from "formik";
import InputField from "../../components/InputField/InputField.component";
import Button from "../../components/Button/Button.component";
import { userLogin} from "../../redux/actionCreators/userActionCr";
import { useDispatch } from "react-redux";

const Login = (props)=> {
    const dispatch = useDispatch();
    return (
      <>
      <h1>login</h1>
      <Formik initialValues={{
        email:'',
        password:''
      }} onSubmit={val => dispatch(userLogin(val))}>
        {formik => (
          <Form>
            <InputField type='email' name='email'/>
            <InputField type='password' name='password'/>
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
      </>
    );

}

export default Login;