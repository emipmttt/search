const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };

    default:
      return state;
  }
};

export default reducer;
