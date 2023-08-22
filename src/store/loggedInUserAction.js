export const setLoggedInUser = (status) => {
    return {
      type: "SET_LOGGED_IN_USER",
      payload: status,
    };
  };