import { v4 } from 'node-uuid'

export const addListItem = (title, link) => ({
  type: 'ADD_LIST_ITEM',
  id: v4().toString(),
  title,
  link,
});

export const toggleListItem = id => ({
  type: 'TOGGLE_ITEM_LIST',
  id
});

export const getCurrentItem = (title, link) => ({
  type: 'GET_CURRENT_ITEM',
  title,
  link,
});