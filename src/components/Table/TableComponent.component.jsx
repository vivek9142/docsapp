import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDocument } from "../../redux/actionCreators/documentActionCr";
import {Table,Paper,TableRow,
    TableCell,TableHead,
    TableContainer,makeStyles,Button} from '@material-ui/core';

const TableComponent = ({docs,...props}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const delHandler = (id) => {
        dispatch(deleteDocument(id));
    }
    
    if(docs.length===0) return <p>No document found</p>
    
    return (
        <>
        <TableContainer className={classes.TableContainer} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell align="center">SL No.</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                {
                    docs.map((row,i) => (
                        <TableRow key={row.id}>
                            <TableCell component='th' scope='row'>{i+1}</TableCell>
                            <TableCell align='left'>
                                <Link to={`/document/${row.id}`}>   
                                    <Button variant='outlined' color='primary'>
                                    {row.title}
                                    </Button>
                                </Link>
                                
                            </TableCell>
                            <TableCell align='left'>{row.desc}</TableCell>
                            <TableCell  align='center'>
                            <Link to={`/document/manage/${row.id}`}><Button>Update</Button></Link>
                            </TableCell>
                            <TableCell  align='center'>
                            <Button onClick={() => delHandler(row.id)}>Delete</Button>    
                            </TableCell>
                            
                        </TableRow>
                    ))
                }
            </Table>
        </TableContainer>
        
        
        </>
    )
}
export default TableComponent;


const useStyles = makeStyles(({
    TableContainer:{
        width: '80%',
        margin: '3rem auto'
    }
}));