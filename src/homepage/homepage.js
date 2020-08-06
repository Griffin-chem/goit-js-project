'use strict';

import refs from '../dom/refs';
// import createCardFunc from '../utils/createCardsFunc';
import templates from './templates.hbs';
import moviesApi from '../services/moviesApi';
// import activeDetailsPage from ""; //Игоря функция

const renderFilms = '';
const genres = '';
const pageNumber = 1;

//функцию выносим в папку utils
function createCardFunc(items) {
  return items.map(item => templates(item)).join('');
}

refs.homePageGallery.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.dataset.id, false);
});

//временная функция
function activeDetailsPage(movieId, boole) {
  console.log(movieId);
  console.log(boole);
}

function fetchPopularMoviesList() {
  moviesApi.fetchPopularMovies(pageNumber).then(({ results }) => {
    refs.homePageGallery.insertAdjacentHTML(
      'beforeend',
      createCardFunc(results),
    );
  });
}

fetchPopularMoviesList();
