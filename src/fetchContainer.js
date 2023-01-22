import axios from 'axios';

const BASA_URL = 'https://pixabay.com/api/';
const apiKey = '11765026-ad058062c9714826adefbf756';

export async function onLoad(searchQuery ,page) {
    const resp = await axios.get(
        `${BASA_URL}?key=${apiKey}&q=car&image_type=photo&orientation=horizontal&safesearch=true&per_page=6&page=1`
      )
     return resp
}