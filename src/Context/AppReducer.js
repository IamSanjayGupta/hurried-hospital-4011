export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, isAuth: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
