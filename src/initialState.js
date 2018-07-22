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
  videoListItems: [
    {
      id: '0',
      title: 'Two Feet - Go Fuck Yourself',
      link: 'https://www.youtube.com/watch?v=SEptMnVlsJY',
      description: 'aaaaaaaaaaaaaaaaaaaa',
      thumbnails: 'https://i.ytimg.com/vi/SEptMnVlsJY/default.jpg',
      selected: false
    },
    {
      id: '1',
      title: 'PatFlynn',
      link: 'https://www.youtube.com/watch?v=CdXEkHJhiVM',
      description: 'aaaaaaaaaaaaaaaaaaaa',
      thumbnails: 'https://yt3.ggpht.com/-55PWfpUCTGc/AAAAAAAAAAI/AAAAAAAAAAA/NcYhlCwx5ww/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
      selected: false
    },
    {
      id: '2',
      title: 'SimpleProgrammer',
      link: 'https://www.youtube.com/watch?v=AczzKgTeR2A',
      description: 'aaaaaaaaaaaaaaaaaaaa',
      thumbnails: 'https://i.ytimg.com/vi/TX6D2CDyE7I/default.jpg',
      selected: false
    },
  ],
  currentVideo: {
    title: 'AAAAAAAAAAAaaa',
    link: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  },

};

export default initialState;
