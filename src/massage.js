import Notiflix from 'notiflix';
import { bottunMore, totalHits } from './find';


export function message (page,total,totalHits) {
    console.log(page,total);
    if (page === 1 && total.length >= 1) {
        bottunMore.hidden = false
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    } 
    if (page === 1 && total.length === 0 && totalHits ===0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
    if (page > 1 && total.length < 40 || page > 1 && total.length < 40 && page >= 1 ) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        bottunMore.hidden = true
    }
}