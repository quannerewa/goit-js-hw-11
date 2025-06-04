import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `50666263-41be0f694eb808efe4a214ed6`
export async function getFetchImg(searchQuery) {
    const params = new URLSearchParams({
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
  
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  }
  