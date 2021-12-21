import {useField} from 'formik';
import { TextField } from '@material-ui/core';

const InputField = (props) => {
    
    const [field,meta] = useField(props);
    
    if(['text','password','email','number'].includes(props.type))
    return (
        <>
        <TextField variant="outlined" {...field} {...props}/>
        </>
    )

    if(props.type === 'textarea')
    return (
        <>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
          {...field} {...props}
        />
        </>
    )
}
export default InputField;