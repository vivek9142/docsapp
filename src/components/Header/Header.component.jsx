import { useDispatch,useSelector } from "react-redux";
import { userLogout } from "../../redux/actionCreators/userActionCr";
import Button from "../Button/Button.component";

const Header = () => {
    const user = useSelector(state => state.user.loggedInUser);
    const dispatch = useDispatch();
    console.log(user);
    return(
        <>
        <h1>{user && Object.keys(user).length===0? '' : `Hi ${user.email}`}</h1>
        <Button onClick={()=>dispatch(userLogout())}>Logout</Button>
        </>
    )
}

export default Header;