import { today } from "../Components/Today";

export const SEE_LATEST = "SEE_LATEST";
export const SEE_BY_CAEGORIES = "SEE_BY_CAEGORIES";
export const SEE_BY_WORD = "SEE_BY_WORD";
export const LOADING = "LOADING";
export const WORD = "WORD";
export const LOADING_ERROR = "LOADING_ERROR";

export const Loading = (bool) => {
  return {
    type: LOADING,
    isLoading: bool
  };
};
export const Word = (bool) => {
  return {
    type: WORD,
    showingWord: bool
  };
};
export const loadingError = (bool) => ({
  type: LOADING_ERROR,
  hasErrored: bool
});

export const fetchNews = (sliceA, sliceB) => {
  const url = `https://api.canillitapp.com/latest/${today}`;

  return (dispatch) => {
    dispatch(Loading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((header) => header.json())
      .then((all) => all.slice(sliceA, sliceB))

      .then((news) => dispatch(addNews(news)))
      .then(() => dispatch(Loading(false)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const addNews = (news, Categorie) => {
  return {
    type: SEE_LATEST,
    payload: { news, Categorie: 0 }
  };
};

export const fetchNewsC = (Categorie, id) => {
  const url = `https://api.canillitapp.com//news/category/${Categorie}`;
  return (dispatch) => {
    dispatch(Loading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((all) => all.splice(0, 12))
      .then((news) => dispatch(addNews(news)))
      .then(() => dispatch(Loading(false)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const addNewsD = (news, Categorie) => {
  return {
    type: SEE_BY_CAEGORIES,
    payload: { news, Categorie }
  };
};

export const fetchNewsWord = (value) => {
  const url = `https://api.canillitapp.com//search/${value}`;
  return (dispatch) => {
    dispatch(Loading(true));
    fetch(url)
      .then((header) => header.json())
      .then((all) => all.splice(0, 12))
      .then((news) => dispatch(addNews(news)))
      .then(() => dispatch(Loading(false)))
      .then(() => dispatch(Word(true)))
      .then(() => dispatch(Word(false)));
  };
};

export const addNewsW = (news, value) => {
  return {
    type: SEE_BY_WORD,
    payload: { news, value }
  };
};
