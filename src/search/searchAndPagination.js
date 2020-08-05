import fetchMoviesWithQuery from '../services/moviesApi';
import itemFilm from '../templates/itemFilm.hbs';

let inputValue;
let pageNumber = 1;
let renderFilms = [];

const refs = {
  formInput: document.querySelector('.formSearch'),
  input: document.querySelector('.inputSearch'),
  filmList: document.querySelector('.filmList'),
  divPagination: document.querySelector('.pagination'),
  prevBtn: document.querySelector('#prev'),
  nextBtn: document.querySelector('#next'),
  numberPage: document.querySelector('.numberPage'),
  errorDiv: document.querySelector('.errorSearch'),
};

refs.formInput.addEventListener('submit', searchFilms);
refs.divPagination.addEventListener('click', plaginationNavigation);

function searchFilms(e) {
  e.preventDefault();

  inputValue = e.target.elements[1].value;

  if (inputValue) {
    fetchMoviesWithQuery
      .fetchMoviesWithQuery(inputValue, pageNumber)
      .then(data => {
        if (data.results.length === 0) {
          refs.errorDiv.classList.remove('displayNone');
          return;
        }
        const markupInsList = data.results.map(film => itemFilm(film)).join('');
        console.log(data.results);
        refs.filmList.insertAdjacentHTML('beforeend', markupInsList);
        refs.errorDiv.classList.add('displayNone');
        inputValue = '';
      })
      .catch(error => {
        refs.errorDiv.classList.remove('displayNone');
      });
    refs.filmList.innerHTML = '';
    inputValue = '';
  }
}

if (pageNumber <= 1) {
  refs.prevBtn.classList.add('displayNone');
}
// вызов года из даты {new Date(release_date).getFullYear()}

function plaginationNavigation(e) {
  if (pageNumber <= 1) {
    refs.prevBtn.classList.add('displayNone');
  }
  if (e.target.id === 'prev' && pageNumber > 1) {
    pageNumber -= 1;
    refs.numberPage.textContent = `${pageNumber}`;
  } else if (e.target.id === 'next') {
    refs.prevBtn.classList.remove('displayNone');
    pageNumber += 1;
    refs.numberPage.textContent = `${pageNumber}`;

    fetchMoviesWithQuery
      .fetchMoviesWithQuery(inputValue, pageNumber)
      .then(data => {
        if (data.results.length === 0) {
          refs.errorDiv.classList.remove('displayNone');
          return;
        }
        const markupInsList = data.results.map(film => itemFilm(film)).join('');
        console.log(data.results);
        refs.filmList.insertAdjacentHTML('beforeend', markupInsList);
        refs.errorDiv.classList.add('displayNone');
      })
      .catch(error => {
        refs.errorDiv.classList.remove('displayNone');
      });
    refs.filmList.innerHTML = '';
  }
}
