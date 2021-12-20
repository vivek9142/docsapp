import { useSelector } from "react-redux";
import Table from "../../components/Table/Table.component";
import { Link } from "react-router-dom";
const Documents = (props) => {
    const documents = useSelector(state => state.documents);
    
    return (
        <>
        <h1>documents page</h1>
        <Link to='/document/manage/'>Create Document</Link>
        <Table docs={documents}/>
        </>
    )
}
export default Documents;