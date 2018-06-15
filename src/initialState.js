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
        title: 'Two Feet - Go Fuck Yourself',
        link: 'https://www.youtube.com/watch?v=SEptMnVlsJY',
        description: 'aaaaaaaaaaaaaaaaaaaa',
        thumbnails: 'aaaaaaaaaaaaaaaaaaaa',
        selected: false
      },
      {
        id: '1',
        title: 'PatFlynn',
        link: 'https://www.youtube.com/watch?v=CdXEkHJhiVM',
        description: 'aaaaaaaaaaaaaaaaaaaa',
        thumbnails: 'aaaaaaaaaaaaaaaaaaaa',
        selected: false
      },
      {
        id: '2',
        title: 'SimpleProgrammer',
        link: 'https://www.youtube.com/watch?v=AczzKgTeR2A',
        description: 'aaaaaaaaaaaaaaaaaaaa',
        thumbnails: 'aaaaaaaaaaaaaaaaaaaa',
        selected: false
      },
    ],
    currentVideo: {
      title: 'AAAAAAAAAAAaaa',
      link: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },

  },
};

export default initialState;
