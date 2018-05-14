let nextTodoId = 0;

export const addListItem = (name, url) => ({
  type: 'ADD_LIST_ITEM',
  id: nextTodoId++,
  name,
  url
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleListItem = id => ({
  type: 'TOGGLE_ITEM_LIST',
  id
});

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SELECTED: 'SELECTED',
  UNSELECTED: 'UNSELECTED'
};
