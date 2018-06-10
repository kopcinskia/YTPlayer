const searchVideos = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEOS':
            return {
                search: action.search,
            };
        default:
            return state;
    }
};

export default searchVideos;
