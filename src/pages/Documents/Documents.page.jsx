import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent.component";
import Paginate from "../../components/Paginate/Paginate.component";
import { Link } from "react-router-dom";

const Documents = (props) => {
    const documents = useSelector(state => state.documents.documents);
    const pageParam = parseInt(new URLSearchParams(props.location.search).get('page'));
    
    const pages = Math.ceil(documents.length/2);
    let Docs = [...documents];
    Docs = Docs.splice((pageParam-1)*2,2);
    
    return (
        <>
        <h1>documents page</h1>
        <Link to='/document/manage/'>Create Document</Link>
        <TableComponent docs={Docs}/>
        <Paginate pages={pages}/>
        </>
    )
}
export default Documents;