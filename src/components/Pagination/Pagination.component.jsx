import { Link } from "react-router-dom";

const Pagination = ({pages}) => {
    let pageList=[];
    for(let i=1;i<=pages;i++){
        pageList.push(
            (
                <li key={i} className='pagination__list-item'>
                    <Link to={`?page=${i}`}>{i}</Link>
                </li>
            ) 
        ) 
    }
    return (
        <div className="pagination__container">
            <ul className="pagination">
                {pageList}
            </ul>
        </div>
    )
}

export default Pagination;
