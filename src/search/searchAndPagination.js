import globalValue from '../globalValue/globalValue';
import moviesApi from '../services/moviesApi';
import fetchPopularMoviesList from '../homepage/homepage';
import refs from '../dom/refs';
import renderSearchPage from '../utils/render';
import spinner from '../loader/loader';
import errorPage from '../errorPage/errorPage';
import createCardsFunc from '../utils/createCardsFunc';

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

refs.prevBtnLib.classList.add('displayNone');

let pageNow;
let total = 6;
const incrementPage = () => {
  total += 6;
};
const decrementPage = () => {
  if (total >= 6) {
    total -= 6;
  } else if (total === 0) {
    return;
  }
};

function paginationLibrary(e) {
  const filmsNumbers = globalValue.getFilmsQueue().length;
  const allFilmsPages = Math.ceil(filmsNumbers / 6);

  if (e.target.id === 'prevLib' && total > 6) {
    refs.libraryGallery.innerHTML = '';

    const prevPageFilms = globalValue.getFilmsQueue().filter((film, index) => {
      if (index < total - 6 && index >= total - 12) {
        return film;
      }
    });
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(prevPageFilms),
    );
    decrementPage();
  } else if (e.target.id === 'nextLib' && total <= filmsNumbers) {
    refs.libraryGallery.innerHTML = '';

    const nextPageFilms = globalValue.getFilmsQueue().filter((film, index) => {
      if (index > total - 1 && index < total + 6) {
        return film;
      }
    });
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(nextPageFilms),
    );
    incrementPage();
  } else {
    return;
  }
  pageNow = total / 6;

  pageNow > 1
    ? refs.prevBtnLib.classList.remove('displayNone')
    : refs.prevBtnLib.classList.add('displayNone');

  pageNow === allFilmsPages
    ? refs.nextBtnLib.classList.add('displayNone')
    : refs.nextBtnLib.classList.remove('displayNone');

  refs.numberPageLib.textContent = `${pageNow} - ${allFilmsPages}`;
}
