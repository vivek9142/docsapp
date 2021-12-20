import { useSelector,useDispatch } from "react-redux";
import Button from "../../components/Button/Button.component";
import { deleteDocument } from "../../redux/actionCreators/documentActionCr";

const Document = (props) => {
    const id = props.match.params.id;
    const document = useSelector(state => state.documents).filter(doc => doc.id === id);
    const dispatch = useDispatch();
    const delHandler = (async (id) => {
        await dispatch(deleteDocument(id));
        await    props.history.push('/');
    });

    return (
        <>
        <h1>document page</h1>
        <h1>{document[0].title}</h1>
        <p>{document[0].desc}</p>
        <Button onClick={()=>delHandler(document[0].id)}>Delete</Button>
        </>
    )
}
export default Document;