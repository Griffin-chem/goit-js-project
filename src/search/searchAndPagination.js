import moviesApi from '../services/moviesApi';
import fetchPopularMoviesList from '../homepage/homepage';
import refs from '../dom/refs';
import renderSearchPage from '../utils/render';
import spinner from '../loader/loader';
import errorPage from '../errorPage/errorPage';
import globalValue from '../globalValue/globalValue';
import goUp from '../utils/goUp';

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
      refs.divPagination.classList.add('displayNone');
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
  refs.prevBtn.classList.add('hidden');
}

export function plaginationNavigation(e) {
  if (globalValue.getPageNumber() === 1) {
    refs.prevBtn.classList.add('hidden');
  }

  if (e.target.id === 'prev' && globalValue.getPageNumber() > 1) {
    globalValue.decrementPageNumber();
  } else if (e.target.id === 'next') {
    refs.prevBtn.classList.remove('hidden');
    refs.numberPage.classList.remove('hidden');
    globalValue.incrementPageNumber();
  } else {
    return;
  }

  fetchFilms(globalValue.getPageNumber(), inputValue);

  refs.numberPage.textContent = `${globalValue.getPageNumber()}`;

  goUp();
}
