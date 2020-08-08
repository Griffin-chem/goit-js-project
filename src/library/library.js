import filmsQueue from'./movies';
import filmsWached from'./movies';
import filmsTemplates from '../templates/templates.hbs';
import refs from '../dom/refs';
// import createLibraryCardsFunc from '../utils/createCardsFunc'


refs.libraryGallery.insertAdjacentHTML('beforeend', createLibraryCardsFunc(filmsQueue));

refs.libraryGallery.addEventListener('click', ({target}) =>{
activeDetailsPage(target.id, true)});
// потом удалить :
const activeDetailsPage = (movieId, boole) => {
    console.log(movieId);
    console.log(boole);
}
// потом удалить :
function createLibraryCardsFunc(films) {
    if (films.length!==0){
    console.log(films);
    const movies = films.map(item => filmsTemplates(item)).join('');
    return movies;} 
  }
//   ---
refs.buttWatch.addEventListener('click', changePageLibrary);
const changePageLibrary = e =>{
  e.preventDefolt(),
  console.log(e.target);
};