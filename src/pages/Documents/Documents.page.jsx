import {useState} from 'react';
import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent.component";
import Paginate from "../../components/Paginate/Paginate.component";
import { Link } from "react-router-dom";
import { Button,Typography,makeStyles } from '@material-ui/core';


const Documents = (props) => {
    const classes = useStyles();
    const documents = useSelector(state => state.documents.documents);
    
    const pages = Math.ceil(documents.length/2);
    let initialDocs = [...documents].splice(0,2);
    const [docs,setDocs] = useState({initialLoading:true,docs:[]});
    
    
    const handlePageChange = (event,value) => {
        let newDocs = [...documents].splice((value-1)*2,2);
        setDocs(prevState => ({...prevState,initialLoading:false,docs:[...newDocs]}));
    }
    
    return (
        <>
        <div className={classes.homepage_container}>
        <Typography className={classes.main__heading} variant='h3'>Documents</Typography>
        
        <Link to='/document/manage/'>
            <Button variant='contained' color='primary'>
                Create Document
            </Button>
        </Link>
        <TableComponent docs={docs.initialLoading?initialDocs:docs.docs}/>
        <Paginate onChange={handlePageChange} pages={pages}/>
        </div>
        </>
    )
}
export default Documents;


const useStyles = makeStyles(({
    homepage_container:{
        margin: '3rem 0'
    },
    main__heading:{
        lineHeight:'6rem'
    }
}));