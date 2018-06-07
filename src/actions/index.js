let nextTodoId = 0;

export const addListItem = (name, url) => ({
  type: 'ADD_LIST_ITEM',
  id: nextTodoId++,
  name,
  url
});

export const toggleListItem = id => ({
  type: 'TOGGLE_ITEM_LIST',
  id
});

export const getCurrentItem = (name, url) => ({
  type: 'GET_CURRENT_ITEM',
  name,
  url,
});