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

            if(user) return{
                ...state,loggedInUser:{...user[0]}
            }
            return;
        case userActions.USER_LOGOUT:
            return{
                ...state,loggedInUser:{}
            }
        default:
            return state;
    }
}

export default userReducer;