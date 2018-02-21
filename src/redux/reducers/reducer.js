const defaultState = {
  booksArray: [],
  likesArray: [],
};
const counter = (state = defaultState, action) => {
  console.log('my payload:', action.payload);

  switch (action.type) {
    case 'SAVEBOOKS':
    {
      const booksArray = action.payload.booksArray;
      const likesArray = action.payload.likesArray;
      return ({
        ...state,
        booksArray,
        likesArray,
      });
    }
    default:
    {
      return state;
    }
  }
};

export default counter;

