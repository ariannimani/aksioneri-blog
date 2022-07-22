export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        results: [...state.results, ...action.playload],
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        results: action.playload,
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};
