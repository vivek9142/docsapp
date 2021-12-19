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
            <td>{doc.title}</td>
            <td>{doc.desc}</td>
            <td><Link to={`/document/manage/${doc.id}`}><Button>Update</Button></Link></td>
            <td><Button onClick={() => delHandler(doc.id)}>Delete</Button></td>
        </tr>
    ));

    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>ID</th>
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