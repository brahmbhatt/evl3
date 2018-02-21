const SAVEBOOKS = 'SAVEBOOKS';
const saveBooks = dataObj => ({
  type: SAVEBOOKS,
  payload: {
    booksArray: dataObj.booksArray,
    likesArray: dataObj.likesArray,
  },
});
export default saveBooks;
