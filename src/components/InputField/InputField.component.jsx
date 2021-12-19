import {useField} from 'formik';

const InputField = (props) => {
    // console.log(props);
    const [field,meta] = useField(props);
    
    if(props.type === 'text')
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