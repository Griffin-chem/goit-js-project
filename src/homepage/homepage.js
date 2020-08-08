'use strict';

import refs from '../dom/refs';
import createCardFunc from '../utils/createCardsFunc';
import moviesApi from '../services/moviesApi';
// import activeDetailsPage from ""; //Игоря функция

let renderFilms = '';
let genres = '';
let pageNumber = 1;

refs.homePageGallery.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.dataset.id, false);
});

function fetchPopularMoviesList() {
  moviesApi.fetchPopularMovies(pageNumber).then(({ results }) => {
    refs.homePageGallery.insertAdjacentHTML(
      'beforeend',
      createCardFunc(results),
    );
  });
}
