const initialState = () => {
  try {
    const serializedStte = localStorage.getItem('state');
    if (serializedStte === null) {
      return defaultState;
    }
    return JSON.parse(serializedStte);
  } catch (err) {
    console.error(err, 'JSON.parse on localStorage ERR!!');
    return undefined;
  }
};

export const seveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err, 'Save State to localStorage ERR!!');
  }
};

const defaultState = {
  favourites: {
    videoListItems: [
      {
        id: '0',
        name: 'Two Feet - Go Fuck Yourself',
        url: 'https://www.youtube.com/watch?v=SEptMnVlsJY',
        selected: false,
      },
      {
        id: '1',
        name: 'PatFlynn',
        url: 'https://www.youtube.com/watch?v=CdXEkHJhiVM',
        selected: false,
      },
      {
        id: '2',
        name: 'SimpleProgrammer',
        url: 'https://www.youtube.com/watch?v=AczzKgTeR2A',
        selected: false,
      },
    ],
    currentVideo: {
      name: 'AAAAAAAAAAAaaa',
      url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },

  },
// Tymczasowo
  currentVideo: {
    name: 'AAAAAAAAAAAaaa',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  },
};

export default initialState;
