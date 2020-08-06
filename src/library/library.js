import filmsQueue from'./movies';
import filmsTemplates from '../templates/templates.hbs'
console.log(filmsQueue);
const refs = {
    libraryQueue: document.querySelector('.library-queue'),
    libraryWatched: document.querySelector('.library-watched'),
}
refs.libraryQueue.insertAdjacentHTML('beforeend', createLibraryCardFunc(filmsQueue));

refs.libraryQueue.addEventListener('click', ({target}) =>{
activeDetailsPage(target.id, true)});



function createLibraryCardFunc(films) {
    const movies = films.map(item => filmsTemplates(item)).join('');
    return movies;
  }