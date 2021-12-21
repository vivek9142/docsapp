import { Formik,Form } from "formik";
import InputField from "../../components/InputField/InputField.component";
import Button from "../../components/Button/Button.component";
import { userRegister } from "../../redux/actionCreators/userActionCr";
import { useDispatch } from "react-redux";

const Register = (props)=> {
  const dispatch = useDispatch();
    return (
      <>
      <h1>register</h1>
      <Formik initialValues={{
        name:'',
        email:'',
        phone:'',
        password:''
      }} onSubmit={val => dispatch(userRegister(val))}>

        {formik => (
          <Form>
            <InputField type='text' name='name'/>
            <InputField type='email' name='email'/>
            <InputField type='number' name='phone'/>
            <InputField type='password' name='password'/>
            <Button type='submit'>Submit</Button>
          </Form>
        )}

      </Formik>
      </>
    );

}

export default Register;