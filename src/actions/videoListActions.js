import { v4 } from 'node-uuid'

export const addListItem = (name, url) => ({
  type: 'ADD_LIST_ITEM',
  id: v4().toString(),
  name,
  url
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