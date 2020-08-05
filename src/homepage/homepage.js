'use strict';

import templates from './templates.hbs';
import moviesApi from '../services/moviesApi';
// import activeDetailsPage from ""; //Игоря функция

const renderFilms = '';
const genres = '';
const pageNumber = 1;

const refs = {
  ulPage: document.querySelector('.js-main-page'),
};

function createCardFunc(items) {
  return items.map(item => templates(item)).join('');
}

refs.ulPage.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.id, true);
});

//временная функция
function activeDetailsPage(movieId, boole) {
  console.log(movieId);
  console.log(boole);
}

function fetchPopularMoviesList() {
  moviesApi.fetchPopularMovies(pageNumber).then(({ results }) => {
    refs.ulPage.insertAdjacentHTML('beforeend', createCardFunc(results));
  });
}

fetchPopularMoviesList();
