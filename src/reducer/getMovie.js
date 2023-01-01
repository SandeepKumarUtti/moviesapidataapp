const initState = {
  data: {}
};

export const getMovie = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return { ...state };
  }
};
