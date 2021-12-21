import {Formik,Form} from 'formik';
import InputField from '../../components/InputField/InputField.component';
import {useDispatch,useSelector} from 'react-redux';
import { addDocument,updateDocument } from '../../redux/actionCreators/documentActionCr';
const ManageDocument = (props) => {
    const dispatch = useDispatch();
    let documentId = props.match.params.id;

    let docs= useSelector(state => state.documents.documents); 

    let documentToUpdate=[];
    if(documentId) {
        documentToUpdate  =  docs.filter(doc => doc.id === documentId);
        console.log(documentId,documentToUpdate);
        if(!documentToUpdate.length) return (<h1>No Documents results found with id  - {documentId} !</h1>);
    }
    const submitHandler = (val) => {
        if(documentToUpdate.length>0) 
            dispatch(updateDocument({id:documentToUpdate[0].id, ...val}));
        else 
            dispatch(addDocument(val));
    }
    return (
        <>
        <h1>{documentToUpdate.length>0 ? `Update Document  ${documentId}` : `Add new Document`}</h1>
        <Formik initialValues={{
            title:documentToUpdate.length>0?documentToUpdate[0].title:'',
            desc:documentToUpdate.length>0?documentToUpdate[0].desc:''
        }} onSubmit={val => submitHandler(val)}>
            {
                formik => (
                    <Form>
                        <InputField name='title' type='text' placeholder='enter title'/>
                        <InputField name='desc' type='textarea' placeholder='enter description'/>
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
        </>
    )
}
export default ManageDocument;