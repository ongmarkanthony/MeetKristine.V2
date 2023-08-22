const initialState = {
    user: null,
    isLoggedIn: false,
  };
  
  // Define action types
  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';
  
  // Define the reducer function
  const loggedInUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default loggedInUserReducer;
