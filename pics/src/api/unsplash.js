import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4qgkFB8baCmV9-cyVXwgwByKf-Dla4d2454QFKGIxXs'
    }
});