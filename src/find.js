import Notiflix from 'notiflix';
import axios from 'axios';

const inputForm = document.querySelector("form")
inputForm.addEventListener("submit", findBase) 
const gallery = document.querySelector(".gallery")
const bottunMore = document.querySelector(".load-more")

const BASA_URL = "https://pixabay.com/api/";
const apiKey = "11765026-ad058062c9714826adefbf756"

async function findBase (e) {
    e.preventDefault()
    

    const {
        elements: { searchQuery },
      } = e.currentTarget;

    const resp = await fetch(`${BASA_URL}?key=${apiKey}&q=${searchQuery.value}&image_type=photo&orientation=horizontal&safesearch=true`)
      if(!resp.ok){
        throw new Error (resp.statusText)
      }

      const data = await resp.json()
      console.log(data)

      for (let i = 0; i < data.hits.length; i++) {
  
      const { webformatURL ,largeImageURL ,tags ,likes ,views ,comments ,downloads } = data.hits[i]

      if (data.total === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        console.log("Sorry, there are no images matching your search query. Please try again.");
      } else {
        const showGallery = `
        <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
</div>`

        gallery.innerHTML += showGallery
      }
    }
}




// "Sorry, there are no images matching your search query. Please try again."
// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.