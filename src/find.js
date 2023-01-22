import Notiflix from 'notiflix';
import axios from 'axios';

const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', findBase);
const gallery = document.querySelector('.gallery');
const bottunMore = document.querySelector('.load-more');
 bottunMore.addEventListener('click', addButton)

const BASA_URL = 'https://pixabay.com/api/';
const apiKey = '11765026-ad058062c9714826adefbf756';
let page = 1;
let searchQuery  = '';

function findBase(e) {
  e.preventDefault();
  console.log(e.target.searchQuery.value);
    searchQuery = e.target.searchQuery.value
    console.log(searchQuery)
   onLoad(searchQuery)
}

async function onLoad (page) {
    console.log(page);
    const resp = await fetch(
        `${BASA_URL}?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5&page=${page}`
      )
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      const data = await resp.json();
      console.log(data);
      createGall(data.hits);
}

function createGall(data) {
  const showGallery = data.map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => 
        `<div class="photo-card">
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
</div>`).join('')

      gallery.innerHTML += showGallery
      bottunMore.hidden= false
    
}

async function addButton () {
    page += 1;
    onLoad(page)
}