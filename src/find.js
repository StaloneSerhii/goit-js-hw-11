import Notiflix from 'notiflix';
import './css/style.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { onLoad } from './fetchContainer';

const inputForm = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const bottunMore = document.querySelector('.load-more');
bottunMore.addEventListener('click', addButton)
inputForm.addEventListener('submit', findBase);



let page = 1;


async function findBase(e) {
  e.preventDefault();
  gallery.innerHTML = ''
  page = 1

  showImg(e.target.searchQuery.value, page)

}

async function showImg (qwery,page) {
      bottunMore.hidden = false
try {
  const data = await onLoad(qwery,page)
    renderImages(data)
    console.log(data);
}catch(error) {console.log(error)}
      //  renderImages(data.hits);
       gallerry.refresh();
}

function renderImages(data) {

  const markup = data.data.hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;

      return `<div class="photo-card">
  <a href="${largeImageURL}" class="gallery__item"><img onclick="return false"; src="${webformatURL}" alt="${tags}" class="gallery__image"  loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div></a>`;
    })
    .join('');
    addButton()
  gallery.insertAdjacentHTML('beforeend', markup);
}

function addButton () {
  
    page += 1;

}


let gallerry = new SimpleLightbox('div.gallery a', {
  captionsData: 'alt',
  captionDelay: 500,
});