import { useEffect } from 'react';
import {Formik,Form} from 'formik';
import InputField from '../../components/InputField/InputField.component';
import {useDispatch,useSelector} from 'react-redux';
import { addDocument,updateDocument } from '../../redux/actionCreators/documentActionCr';
import {Button,makeStyles, Typography} from '@material-ui/core';
import Loading from '../../components/Loading/Loading.component';

const ManageDocument = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    let documentId = props.match.params.id;

    let docs= useSelector(state => state.documents.documents); 

    let documentToUpdate=[];
    if(documentId) {
        documentToUpdate  =  docs.filter(doc => doc.id === documentId);
        console.log(documentId,documentToUpdate);
        if(!documentToUpdate.length) return (<h1>No Documents results found with id  - {documentId} !</h1>);
    }
    const submitHandler = async(val) => {
        if(documentToUpdate.length>0)
          await dispatch(updateDocument({id:documentToUpdate[0].id, ...val}));
        else 
          await dispatch(addDocument(val));
            
    }
    return (
        <>
        <Loading/>
        <div className={classes.manageDocs_container}>
        <div className="login__container--header_container">
            <Typography variant='h3'>
                {documentToUpdate.length>0 ? `Update Document` : `Add new Document`}
            </Typography>
            <Typography variant='h6'>{documentToUpdate.length>0 ?`Document ID - ${documentId}`:''}</Typography>
        </div>
        <div className={classes.manageDocs_container__formContainer}>
            <Formik initialValues={{
              title:documentToUpdate.length>0?documentToUpdate[0].title:'',
              desc:documentToUpdate.length>0?documentToUpdate[0].desc:''
            }} onSubmit={val => submitHandler(val)}>
              {formik => (
                <Form className={classes.formContainer}>
                  <InputField className={classes.InputField} variant='outlined' label='Title' type='text' size='small' name='title'/>
                  <InputField className={classes.InputField} variant='outlined' label='Description' type='textarea' size='small' name='desc'/>
                  <Button color='primary' variant='contained' size='small' type='submit'>Submit</Button>
                </Form>
              )}
            </Formik>
        </div>
        
      </div>
        </>
    )
}
export default ManageDocument;

const useStyles = makeStyles(({
    manageDocs_container:{
      maxWidth: '30rem',
      margin: '10rem auto',
      background: '#c1c1c1',
      borderRadius: '0.5rem',
      padding:'1rem'
    },
    manageDocs_container__formContainer:{
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