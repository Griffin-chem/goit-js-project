'use strict';

import refs from '../dom/refs';
import createCardFunc from '../utils/createCardsFunc';
import moviesApi from '../services/moviesApi';
import spinner from '../loader/loader';
// import activeDetailsPage from ""; //Игоря функция

let renderFilms = '';
let genres = '';
let pageNumber = 1;

refs.homePageGallery.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.dataset.id, false);
});

function fetchPopularMoviesList() {
  spinner.showLoder();
  moviesApi.fetchPopularMovies(pageNumber).then(({ results }) => {
    console.log(results);
    refs.homePageGallery.insertAdjacentHTML(
      'beforeend',
      createCardFunc(results),
    );
  }).catch((error)=>{
    console.log(error)
  }).finally(()=>{
spinner.hiddenLoader();
  });
}
