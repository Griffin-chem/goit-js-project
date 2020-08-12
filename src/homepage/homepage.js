'use strict';

import refs from '../dom/refs';
import createCardFunc from '../utils/createCardsFunc';
import moviesApi from '../services/moviesApi';
import spinner from '../loader/loader';
import { activeHomePage, activeDetailsPage } from '../header/navigation';

let renderFilms = '';
let genres = '';
let pageNumber = 1;

fetchPopularMoviesList();
window.addEventListener('DOMContentLoaded', activeHomePage);

// refs.homePageGallery.addEventListener('click', ({ target }) => {
//   activeDetailsPage(target.dataset.id, false);
// });

function fetchPopularMoviesList() {
  spinner.showLoder();
  moviesApi
    .fetchPopularMovies(pageNumber)
    .then(({ results }) => {
      refs.homePageGallery.insertAdjacentHTML(
        'beforeend',
        createCardFunc(results),
      );
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      spinner.hiddenLoader();
    });
}
