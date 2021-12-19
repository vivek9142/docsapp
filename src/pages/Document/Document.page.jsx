import { useSelector } from "react-redux";

const Document = (props) => {
    const id = props.match.params.id;
    const document = useSelector(state => state.documents).filter(doc => doc.id === id);
    
    return (
        <>
        <h1>document page</h1>
        <h1>{document[0].title}</h1>
        <p>{document[0].desc}</p>
        </>
    )
}
export default Document;