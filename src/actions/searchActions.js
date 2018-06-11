export const getSearchedObject = (search) => ({
  type: 'GET_SEARCHED_OBJECT',
  search
});

export const createSearchingList = (array) => ({
  type: 'CREATING_SEARCHING_LIST',
  array
});