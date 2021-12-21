import {useState} from 'react';
import { useSelector } from "react-redux";
import TableComponent from "../../components/Table/TableComponent.component";
import Paginate from "../../components/Paginate/Paginate.component";
import { Link } from "react-router-dom";
import { Button,Typography,makeStyles } from '@material-ui/core';
import Loading from '../../components/Loading/Loading.component';
import { resultsPerPage } from '../../config';

const Documents = (props) => {
    const classes = useStyles();
    const documents = useSelector(state => state.documents.documents);
    
    const pages = Math.ceil(documents.length/resultsPerPage);
    let initialDocs = [...documents].splice(0,resultsPerPage);
    const [docs,setDocs] = useState({initialLoading:true,docs:[]});
    
    
    const handlePageChange = (event,value) => {
        let newDocs = [...documents].splice((value-1)*resultsPerPage,resultsPerPage);
        setDocs(prevState => ({...prevState,initialLoading:false,docs:[...newDocs]}));
    }
    
    return (
        <>
        <Loading/>
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