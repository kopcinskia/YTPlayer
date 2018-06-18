import { v4 } from 'node-uuid'

export const addListItem = (id, link, title, description, thumbnails, selected) => ({
  type: 'ADD_LIST_ITEM',
  id: v4().toString(),
  link,
  title,
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