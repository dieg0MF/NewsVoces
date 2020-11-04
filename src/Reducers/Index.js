import { combineReducers } from "redux";
import {
  SEE_LATEST,
  SEE_BY_CAEGORIES,
  SEE_BY_WORD,
  LOADING,
  WORD,
  LOADING_ERROR
} from "../Actions/Actions";

const news = (news = [], action) => {
  if (action.type === SEE_LATEST) {
    return action.payload.news;
  }

  if (action.type === SEE_BY_CAEGORIES) {
    return action.payload;
  }
  if (action.type === SEE_BY_WORD) {
    return action.payload;
  }
  return news;
};

const Loading = (state = false, action) => {
  if (action.type === LOADING) {
    return action.isLoading;
  }
  return state;
};
const Word = (state = false, action) => {
  if (action.type === WORD) {
    return action.showingWord;
  }
  return state;
};
const loadingError = (state = false, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
};

export default combineReducers({
  news,
  Loading,
  Word,
  loadingError
});
