import userActions from '../actions/userActions';

const initialState = {
    users:[{
        name: 'ddld',
        email: 'dd@c.com',
        phone: 119292,
        password: 'asqawaa'
      },
      {
        name: 'ddld',
        email: 'dd@2c.com',
        phone: 119292,
        password: 'asqawaa'
      }],
    loggedInUser:{},
    loginError:'',
}

const userReducer = (state = initialState,action) => {
    switch(action.type){
        case userActions.USER_REGISTER:
            return {
                ...state,
                users:[...state.users,action.payload.user]
                }
        case userActions.USER_LOGIN:
            const user = state.users.filter(user => user.email === action.payload.email && user.password === action.payload.password);
            delete user[0]['password'];
            console.log(user);
            if(user){ return{
                ...state, loginError:'',loggedInUser:{...user[0]}
            }}
            else return{
                ...state,loginError:'Wrong username or password',loggedInUser:{}
            }
        case userActions.USER_LOGOUT:
            return{
                ...state,loggedInUser:{}
            }
        default:
            return state;
    }
}

export default userReducer;