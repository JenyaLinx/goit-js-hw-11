import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54273308-bf413a89d7aaddbdadec825f7';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
