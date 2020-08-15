import refs from '../dom/refs';
import {
  searchFilms,
  plaginationNavigation,
} from '../search/searchAndPagination';
import { createGallery, createLibraryGallery } from '../library/library';
import { showDetails } from '../details/filmDetailsPage';
import globalValue from '../globalValue/globalValue';
import storage from '../details/storage';
import errorPage from '../errorPage/errorPage'

// import { join } from 'lodash';

// ======================================
refs.navHome.addEventListener('click', activeHomePage);
refs.navLibrary.addEventListener('click', activeLibraryPage);
refs.logo.addEventListener('click', activeHomePage);
globalValue.setFilmsQueue();
globalValue.setFilmsWatched();
// =====================================

function activeHomePage(evt) {
  evt.preventDefault();
  if (refs.mainPage.classList.contains('is-hidden')) {
    refs.mainPage.classList.remove('is-hidden');
  }
  errorPage.hiddenErrorPage();
  refs.mainLibrary.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
  refs.imgDetailsWrapper.innerHTML = '';
  refs.infoDetailsBox.innerHTML = '';

  // addEventListener
  refs.homePageGallery.addEventListener('click', startDetailsFilm);
  refs.divPagination.addEventListener('click', plaginationNavigation);
  refs.formInput.addEventListener('submit', searchFilms);

  //removeEventListener
  refs.buttWatch.removeEventListener('click', startQueueGallery);
  refs.buttQue.removeEventListener('click', startWatchedGallery);
  refs.libraryGallery.removeEventListener('click', startDetailsLibraryFilm);
  refs.btnToQueue.removeEventListener('click', storage.toggleToQueue);
  refs.btnToWatched.removeEventListener('click', storage.toggleToWatched);
}

function activeLibraryPage(evt) {
  evt.preventDefault();
  if (refs.mainLibrary.classList.contains('is-hidden')) {
    refs.mainLibrary.classList.remove('is-hidden');
  }
  errorPage.hiddenErrorPage();
  refs.mainPage.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
  refs.imgDetailsWrapper.innerHTML = '';
  refs.infoDetailsBox.innerHTML = '';
  refs.libraryGallery.innerHTML = '';
  globalValue.setFilmsQueue();
  globalValue.setFilmsWatched();
  createGallery(globalValue.getFilmsQueue(), 'queue');
  refs.buttQue.classList.add('active-but-lib');
  refs.buttWatch.classList.remove('active-but-lib');

  // addEventListener
  refs.buttQue.addEventListener('click', startQueueGallery);
  refs.buttWatch.addEventListener('click', startWatchedGallery);
  refs.libraryGallery.addEventListener('click', startDetailsLibraryFilm);

  //removeEventListener
  refs.homePageGallery.removeEventListener('click', startDetailsFilm);
  refs.divPagination.removeEventListener('click', plaginationNavigation);
  refs.formInput.removeEventListener('submit', searchFilms);
  refs.btnToQueue.removeEventListener('click', storage.toggleToQueue);
  refs.btnToWatched.removeEventListener('click', storage.toggleToWatched);
}

// ===================
function activeDetailsPage(movieId) {
  if (refs.mainDetailsPage.classList.contains('is-hidden')) {
    refs.mainDetailsPage.classList.remove('is-hidden');
  }
  errorPage.hiddenErrorPage();
  refs.mainPage.classList.add('is-hidden');
  refs.mainLibrary.classList.add('is-hidden');

  showDetails(movieId);

  // addEventListener
  refs.btnToQueue.addEventListener('click', storage.toggleToQueue);
  refs.btnToWatched.addEventListener('click', storage.toggleToWatched);

  //removeEventListener
  refs.homePageGallery.removeEventListener('click', startDetailsFilm);
  refs.divPagination.removeEventListener('click', plaginationNavigation);
  refs.formInput.removeEventListener('submit', searchFilms);
  refs.buttWatch.removeEventListener('click', startQueueGallery);
  refs.buttQue.removeEventListener('click', startWatchedGallery);
  refs.libraryGallery.removeEventListener('click', startDetailsLibraryFilm);
}

const startDetailsFilm = ({ target }) =>
  activeDetailsPage(target.parentElement.children[2].dataset.id, false);

const startDetailsLibraryFilm = ({ target }) =>
  activeDetailsPage(target.parentElement.children[2].dataset.id, false);

const startQueueGallery = ({ target }) => {
  // globalValue.setFilmsQueue();
  createLibraryGallery(target, refs.buttWatch, globalValue.getFilmsQueue());
};

const startWatchedGallery = ({ target }) => {
  // globalValue.setFilmsWatched();
  createLibraryGallery(target, refs.buttQue, globalValue.getFilmsWatched());
};

export { activeHomePage, activeDetailsPage };
