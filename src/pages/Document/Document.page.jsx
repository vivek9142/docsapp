import { useSelector,useDispatch } from "react-redux";
import Button from "../../components/Button/Button.component";
import { deleteDocument } from "../../redux/actionCreators/documentActionCr";
import { makeStyles } from "@material-ui/core";

const Document = (props) => {
    const classes = useStyles();
    const id = props.match.params.id;
    const document = useSelector(state => state.documents.documents).filter(doc => doc.id === id);
    const dispatch = useDispatch();

    if(document.length===0) return <>No document found</>

    const delHandler = (async (id) => {
        await dispatch(deleteDocument(id));
        await props.history.push('/');
    });

    return (
        <>
        <div className={classes.doc_container}>
        <h1>{document?.[0].title}</h1>
        <p>{document?.[0].desc}</p>
        <Button onClick={()=>delHandler(document?.[0].id)}>Delete</Button>
        </div>
        
        </>
    )
}
export default Document;


const useStyles = makeStyles(({
    doc_container:{
      maxWidth: '30rem',
      margin: '6rem auto',
      background: '#c1c1c1',
      borderRadius: '0.5rem',
      padding:'1rem'
    }
  }));