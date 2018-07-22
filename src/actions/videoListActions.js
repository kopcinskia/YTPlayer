import { v4 } from 'node-uuid'

export const addToFavourite = (title, link, thumbnails, description) => ({
  type: 'ADD_TO_FAVOURITE',
  id: v4().toString(),
  title,
  link,
  thumbnails,
  description
});

export const deleteFromFavourite = (id) => ({
    type: 'DELETE_FROM_FAVOURITE',
    id,
});

export const toggleListItem = id => ({
  type: 'TOGGLE_ITEM_LIST',
  id,
});

export const getCurrentItem = (title, link) => ({
  type: 'GET_CURRENT_ITEM',
  title,
  link,
});