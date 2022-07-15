export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, results: action.playload, error: "" };
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

export const categoryApiReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_CHANGE":
      return { category: action.playload };
    default:
      return state;
  }
};
