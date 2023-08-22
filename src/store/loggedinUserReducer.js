const loggedInUserReducer = (state = false, action) => {
    switch (action.type) {
      case "SET_LOGGED_IN_USER":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default loggedInUserReducer;