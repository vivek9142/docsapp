import {useField} from 'formik';

const InputField = (props) => {
    
    const [field,meta] = useField(props);
    
    if(['text','password','email','number'].includes(props.type))
    return (
        <>
        <input {...field} {...props}/>
        </>
    )

    if(props.type === 'textarea')
    return (
        <>
        <textarea {...field} {...props}/> 
        </>
    )
}
export default InputField;