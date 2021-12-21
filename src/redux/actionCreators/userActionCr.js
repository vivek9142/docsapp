import userActions from '../actions/userActions';

const userRegister = (user) => ({type:userActions.USER_REGISTER,payload:{user}});

const userLogin = user => ({type:userActions.USER_LOGIN,payload:user});

export {userRegister,userLogin};