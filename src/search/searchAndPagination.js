import fetchMoviesWithQuery from '../services/moviesApi';
import itemFilm from './templates/itemFilm.hbs';

let inputValue;
const pageNumber = 1;

const refs = {
  formInput: document.querySelector('.formSearch'),
  input: document.querySelector('.inputSearch'),
  filmList: document.querySelector('.filmList'),
  prevBtn: document.querySelector('button[data-active=prev]'),
  nextBtn: document.querySelector('button[data-active=next]'),
};

refs.formInput.addEventListener('submit', searchFilms);

function fetchFilms(inputValue, pageNumber) {
  fetchMoviesWithQuery.fetchMoviesWithQuery(inputValue, pageNumber);
}

function searchFilms(e) {
  e.preventDefault();

  console.log(e.target.elements[1].value);
  inputValue = e.target.elements[1].value;

  if (e.target.elements[1].value) {
    fetchMoviesWithQuery
      .fetchMoviesWithQuery(inputValue, pageNumber)
      .then(data => {
        const markupInsList = data.results.map(film => itemFilm(film)).join('');
        console.log(markupInsList);
        console.log(data.results);
        refs.filmList.insertAdjacentHTML('beforeend', markupInsList);
      });
  }
}
