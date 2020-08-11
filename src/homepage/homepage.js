'use strict';

import refs from '../dom/refs';
import createCardFunc from '../utils/createCardsFunc';
import moviesApi from '../services/moviesApi';
import { activeDetailsPage } from '../header/navigation';

let renderFilms = '';
let genres = '';
let pageNumber = 1;

fetchPopularMoviesList();

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
