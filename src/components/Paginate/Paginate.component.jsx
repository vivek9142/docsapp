import {Pagination} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
const Paginate = ({pages,...props}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.pagination__container}>
            <Pagination className={classes.paging} count={pages} variant="outlined" {...props} />
        </div>
    )
}

export default Paginate;

const useStyles = makeStyles(({
    paging:{
        display: 'flex',
        justifyContent: 'center',
    },
    pagination__container:{
        paddingBottom:'3rem'
    }
}));