import filmsQueue from'./movies';
import filmsWached from'./movies';
import filmsTemplates from '../templates/templates.hbs';
import refs from '../dom/refs';
// import createLibraryCardsFunc from '../utils/createCardsFunc'


refs.libraryGallery.insertAdjacentHTML('beforeend', createLibraryCardsFunc(filmsQueue, 'You do not have to queue movies to watch. Add them.'));

refs.libraryGallery.addEventListener('click', ({target}) =>{
activeDetailsPage(target.id, true)});
// потом удалить :
const activeDetailsPage = (movieId, boole) => {
    console.log(movieId);
    console.log(boole);
}
// потом удалить :
function createLibraryCardsFunc(films, message) {
    if (films.length!==0){
    console.log(films);
    const movies = films.map(item => filmsTemplates(item)).join('');
    return movies;} else {return `<li>${message}</li>`}
  }
//   ---
