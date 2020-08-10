import fetchMoviesWithQuery from '../services/moviesApi';
import itemFilm from '../templates/itemFilm.hbs';
import Handlebars from 'handlebars';
import refs from '../dom/refs';
import createCardsFunc from '../utils/createCardsFunc';

let inputValue;
let pageNumber = 1;
let renderFilms;

// Handlebars.registerHelper('year1', function (date) {
//   // const dat = Handlebars.escapeExpression(date);
//   // return options.fn(this)
//   const year2 = toString(new Date(date).getFullYear());
//   return year2;
//   // return new Handlebars.SafeString(dat);
// });

refs.formInput.addEventListener('submit', searchFilms);
// refs.divPagination.addEventListener('click', plaginationNavigation);

function fetchFilms(pageNumber, inputValue) {
  let fetch;

  if (inputValue) {
    fetch = fetchMoviesWithQuery.fetchMoviesWithQuery(inputValue, pageNumber);
  } else {
    fetch = fetchMoviesWithQuery.fetchPopularMovies(pageNumber);
  }

  fetch
    .then(data => {
      renderFilms = [...data.results];
      console.log(data);
      data.total_pages === 1
        ? refs.divPagination.classList.add('displayNone')
        : refs.nextBtn.classList.remove('displayNone');

      data.total_pages === pageNumber
        ? refs.nextBtn.classList.add('displayNone')
        : refs.nextBtn.classList.remove('displayNone');

      if (pageNumber === 1) {
        refs.prevBtn.classList.add('displayNone');
      }

      if (data.results.length === 0) {
        refs.errorDiv.classList.remove('displayNone');
        refs.homePageGallery.innerHTML = '';
        return;
      }

      refs.homePageGallery.innerHTML = '';
      refs.errorDiv.classList.add('displayNone');

      const markupInsList = createCardsFunc(data.results);
      refs.homePageGallery.insertAdjacentHTML('beforeend', markupInsList);
    })
    .catch(error => {
      refs.errorDiv.classList.remove('displayNone');
    });
}

function searchFilms(e) {
  e.preventDefault();
  pageNumber = 1;
  refs.numberPage.textContent = `${pageNumber}`;
  inputValue = e.target.elements[1].value;
  refs.input.value = '';

  if (inputValue) {
    fetchFilms(pageNumber, inputValue);
  }
}

if (pageNumber === 1) {
  refs.prevBtn.classList.add('displayNone');
  refs.numberPage.classList.add('displayNone');
}

export function plaginationNavigation(e) {
  if (pageNumber === 1) {
    refs.prevBtn.classList.add('displayNone');
  }

  if (e.target.id === 'prev' && pageNumber > 1) {
    pageNumber -= 1;
  } else if (e.target.id === 'next') {
    refs.prevBtn.classList.remove('displayNone');
    refs.numberPage.classList.remove('displayNone');
    pageNumber += 1;
  } else {
    return;
  }

  fetchFilms(pageNumber, inputValue);

  refs.numberPage.textContent = `${pageNumber}`;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
