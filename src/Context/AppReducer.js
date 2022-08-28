export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, isAuth: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_WHAT":
      return { ...state, what: action.payload };
    case "SET_WHERE":
      return { ...state, where: action.payload };
    case "ADD_JOB":
      return { ...state, jobs: [...action.payload] };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SELECTED_JOB":
      return { ...state, selectedJob: action.payload };
    case "SET_REMOTE":
      return { ...state, remote: action.payload };
    case "SET_DATE_POSTED":
      return { ...state, datePosted: action.payload };
    case "SET_JOB_TYPE":
      return { ...state, jobType: action.payload };
    default:
      return state;
  }
};
