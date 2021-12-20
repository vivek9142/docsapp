import Button from "../Button/Button.component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDocument } from "../../redux/actionCreators/documentActionCr";

const Table = ({docs,...props}) => {
    const dispatch = useDispatch();
    const delHandler = (id) => {
        dispatch(deleteDocument(id));
    }
    const renderedTable = docs.map((doc,i) => (
        <tr key={doc.id}>
            <td>{i+1}</td>
            <td><Link to={`/document/${doc.id}`}>{doc.title}</Link></td>
            <td>{doc.desc}</td>
            <td><Link to={`/document/manage/${doc.id}`}><Button>Update</Button></Link></td>
            <td><Button onClick={() => delHandler(doc.id)}>Delete</Button></td>
        </tr>
    ));
    if(renderedTable.length===0) return <p>No document found</p>
    
    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {renderedTable} 
            </tbody>
        </table>
    )
}
export default Table;