import refs from '../dom/refs';
import {
  searchFilms,
  plaginationNavigation,
} from '../search/searchAndPagination';
import { createGallery, createLibraryGallery } from '../library/library';
import { showDetails } from '../details/filmDetailsPage';
import filmsQueue from '../library/movies';
import filmsWatched from '../library/movies';
// import { join } from 'lodash';
// ======================================
refs.navHome.addEventListener('click', evt => activeHomePage(evt));
refs.navLibrary.addEventListener('click', evt => activeLibraryPage(evt));
refs.logo.addEventListener('click', evt => activeHomePage(evt));
// =====================================
function activeHomePage(evt) {
  evt.preventDefault();
  if (refs.mainPage.classList.contains('is-hidden')) {
    refs.mainPage.classList.remove('is-hidden');
  }
  refs.mainLibrary.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
  refs.imgDetailsWrapper.innerHTML = '';
  refs.infoDetailsBox.innerHTML = '';
  // =======================================
  // запускать слушатель на старте страницы
  // addEventListener
  refs.homePageGallery.addEventListener('click', startDetailsFilm);
  refs.divPagination.addEventListener('click', plaginationNavigation);
  refs.formInput.addEventListener('submit', searchFilms);

  //removeEventListener
  refs.buttWatch.removeEventListener('click', startQueueGallery);
  refs.buttQue.removeEventListener('click', startWatchedGallery);
  refs.libraryGallery.removeEventListener('click', startDetailsLibraryFilm);
}
//---

// ====================================

function activeLibraryPage(evt) {
  evt.preventDefault();
  // показывает страницу с библиотекой
  if (refs.mainLibrary.classList.contains('is-hidden')) {
    refs.mainLibrary.classList.remove('is-hidden');
  }
  refs.mainPage.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
  refs.imgDetailsWrapper.innerHTML = '';
  refs.infoDetailsBox.innerHTML = '';
  createGallery(filmsQueue);
  refs.buttQue.classList.add('active-but-lib');
  refs.buttWatch.classList.remove('active-but-lib');

  // addEventListener
  refs.buttWatch.addEventListener('click', startQueueGallery);
  refs.buttQue.addEventListener('click', startWatchedGallery);
  refs.libraryGallery.addEventListener('click', startDetailsLibraryFilm);

  //removeEventListener
  refs.homePageGallery.removeEventListener('click', startDetailsFilm);
  refs.divPagination.removeEventListener('click', plaginationNavigation);
  refs.formInput.removeEventListener('submit', searchFilms);
}
// ===================
function activeDetailsPage(movieId, itsLibraryFilm) {
  if (refs.mainDetailsPage.classList.contains('is-hidden')) {
    refs.mainDetailsPage.classList.remove('is-hidden');
  }

  refs.mainPage.classList.add('is-hidden');
  refs.mainLibrary.classList.add('is-hidden');

  showDetails(movieId, itsLibraryFilm);
  // ===============================
  // addEventListener

  //removeEventListener
  refs.homePageGallery.removeEventListener('click', startDetailsFilm);
  refs.divPagination.removeEventListener('click', plaginationNavigation);
  refs.formInput.removeEventListener('submit', searchFilms);
  refs.buttWatch.removeEventListener('click', startQueueGallery);
  refs.buttQue.removeEventListener('click', startWatchedGallery);
  refs.libraryGallery.removeEventListener('click', startDetailsLibraryFilm);
}

const startDetailsFilm = ({ target }) =>
  activeDetailsPage(target.dataset.id, false);

const startDetailsLibraryFilm = ({ target }) =>
  activeDetailsPage(target.dataset.id, false);

const startQueueGallery = ({ target }) =>
  createLibraryGallery(target, refs.buttQue, filmsQueue);

const startWatchedGallery = ({ target }) =>
  createLibraryGallery(target, refs.buttWatch, filmsWatched);

export { activeHomePage, activeDetailsPage };
