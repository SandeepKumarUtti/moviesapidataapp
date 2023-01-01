const initState = {
  page: 0
};

export const getMovie = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        page: action.payload.data
      };
    default:
      return { ...state };
  }
};
