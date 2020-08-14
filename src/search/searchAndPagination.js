import globalValue from '../globalValue/globalValue';
import moviesApi from '../services/moviesApi';
import fetchPopularMoviesList from '../homepage/homepage';
import refs from '../dom/refs';
import renderSearchPage from '../utils/render';
import spinner from '../loader/loader';
import errorPage from '../errorPage/errorPage';
import { indexOf } from 'core-js/fn/array';

let inputValue;

refs.numberPage.textContent = `${globalValue.getPageNumber()}`;

function fetchFilms(pageNumber, inputValue) {
  inputValue
    ? fetchMoviesWithQueryList(pageNumber, inputValue)
    : fetchPopularMoviesList(pageNumber);
}

function fetchMoviesWithQueryList(pageNumber, inputValue) {
  spinner.showLoder();
  moviesApi
    .fetchMoviesWithQuery(pageNumber, inputValue)
    .then(data => {
      renderSearchPage(data);
      refs.numberPage.textContent = `${globalValue.getPageNumber()} - ${
        data.total_pages
      }`;
    })
    .catch(error => {
      refs.errorDiv.classList.remove('displayNone');
      errorPage.showErrorPage();
    })
    .finally(() => {
      spinner.hiddenLoader();
    });
}

export function searchFilms(e) {
  e.preventDefault();
  globalValue.resetPageNumber();
  // refs.numberPage.textContent = `${globalValue.getPageNumber()}`;
  inputValue = e.target.elements[1].value;
  refs.input.value = '';

  fetchFilms(globalValue.getPageNumber(), inputValue);
}

if (globalValue.getPageNumber() === 1) {
  refs.prevBtn.classList.add('displayNone');
}

export function plaginationNavigation(e) {
  if (globalValue.getPageNumber() === 1) {
    refs.prevBtn.classList.add('displayNone');
  }

  if (e.target.id === 'prev' && globalValue.getPageNumber() > 1) {
    globalValue.decrementPageNumber();
  } else if (e.target.id === 'next') {
    refs.prevBtn.classList.remove('displayNone');
    refs.numberPage.classList.remove('displayNone');
    globalValue.incrementPageNumber();
  } else {
    return;
  }

  fetchFilms(globalValue.getPageNumber(), inputValue);

  refs.numberPage.textContent = `${globalValue.getPageNumber()}`;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

refs.divPaginationLib.addEventListener('click', paginationLibrary);
refs.numberPageLib.textContent = `1`;
// refs.prevBtnLib.classList.add('displayNone');

function paginationLibrary(e) {
  console.log(globalValue.getFilmsQueue());

  const films = globalValue.getFilmsQueue();

  const nextPageFilms = globalValue
    .getFilmsQueue()
    .filter(film => indexOf(film) < 6);

  console.log(nextPageFilms);

  const filmsNumbers = globalValue.getFilmsQueue().length;

  const allFilmsPages = Math.round(filmsNumbers / 6);

  console.log(allFilmsPages);

  // const pageNow =

  if (e.target.id === 'prevLib') {
    refs.libraryGallery.innerHTML = '';
    refs.libraryGallery.insertAdjacentHTML('beforeend', createCardsFunc(films));
  } else if (e.target.id === 'nextLib') {
    refs.libraryGallery.innerHTML = '';
    refs.libraryGallery.insertAdjacentHTML('beforeend', createCardsFunc(films));
  } else {
    return;
  }

  refs.numberPageLib.textContent = `${filmsNumbers} - ${allFilmsPages}`;

  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth',
  // });
}
