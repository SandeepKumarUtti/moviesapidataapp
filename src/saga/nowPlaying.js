import { call, put, takeEvery } from "redux-saga/effects";

function* mySaga() {
  yield takeEvery("FETCH_DATA", fetchData);
}

function* fetchData(page) {
  const getPage = (state) => state.sid.data;

  const data = yield call(() =>
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=079d25c82040bf67eedcb0b96ca55e2e&language=english&page=${page}`
    ).then((response) => response.json())
  );
  yield put({ type: "GET_MOVIE_SUCCESS", payload: { data } });
}

export default mySaga;
