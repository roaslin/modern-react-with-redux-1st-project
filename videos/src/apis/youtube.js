import axios from 'axios';

const KEY = 'AIzaSyDKcfR3dNaIF9YOhT8WLKSKmv6Qx08dK2s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});