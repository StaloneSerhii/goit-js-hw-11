import Notiflix from 'notiflix';
import { bottunMore } from './find';

export function message (page,total) {
    console.log(page,total);
    if (page === 1 && total.length >= 6) {
        console.log(`Hooray! We found ${total.length} images.`);
        Notiflix.Notify.success(`Hooray! We found ${total.length} images.`);
    } 
    if (page === 1 && total.length === 0) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
    }
    if (page > 1 && total.length < 6 || page >= 1 && total.length < 6) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        bottunMore.hidden = true
    }
}