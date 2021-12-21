import userActions from '../actions/userActions';

const userRegister = (user) => ({type:userActions.USER_REGISTER,payload:{user}});

const userLogin = user => ({type:userActions.USER_LOGIN,payload:user});

const userLogout = () => ({type:userActions.USER_LOGOUT});

export {userRegister,userLogin,userLogout};