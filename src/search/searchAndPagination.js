import fetchMoviesWithQuery from '../services/moviesApi';
import itemFilm from '../templates/itemFilm.hbs';
import Handlebars from 'handlebars';
// import compiledTemplate from './template.handlebars';

let inputValue;
let pageNumber = 1;
let renderFilms = [];

Handlebars.registerHelper('year', function (date) {
  const dat = Handlebars.escapeExpression(date);
  // return options.fn(this)
  // return new Date(date).getFullYear();
  return new Handlebars.SafeString(dat);
});

const refs = {
  formInput: document.querySelector('.formSearch'),
  input: document.querySelector('.inputSearch'),
  filmList: document.querySelector('.js-main-page'),
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
  refs.filmList.innerHTML = '';

  if (inputValue) {
    fetchMoviesWithQuery
      .fetchMoviesWithQuery(inputValue, pageNumber)
      .then(data => {
        if (data.results.length === 0) {
          refs.errorDiv.classList.remove('displayNone');
          return;
        }

        refs.errorDiv.classList.add('displayNone');

        const markupInsList = data.results.map(film => itemFilm(film)).join('');

        console.log(markupInsList);
        console.log(data.results);

        refs.filmList.insertAdjacentHTML('beforeend', markupInsList);
        refs.input.value = '';
      })
      .catch(error => {
        refs.errorDiv.classList.remove('displayNone');
      });
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
  } else if (e.target.id === 'next') {
    refs.prevBtn.classList.remove('displayNone');
    pageNumber += 1;
  }
  refs.numberPage.textContent = `${pageNumber}`;
}
