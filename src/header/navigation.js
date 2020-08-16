import refs from '../dom/refs';
import {
  searchFilms,
  plaginationNavigation,
} from '../search/searchAndPagination';
import { createGallery, createLibraryGallery } from '../library/library';
import { showDetails } from '../details/filmDetailsPage';
import globalValue from '../globalValue/globalValue';
import storage from '../details/storage';
import errorPage from '../errorPage/errorPage';

// ======================================
refs.navHome.addEventListener('click', activeHomePage);
refs.navLibrary.addEventListener('click', activeLibraryPage);
refs.logo.addEventListener('click', activeHomePage);
globalValue.setFilmsQueue();
globalValue.setFilmsWatched();
// =====================================

function activeHomePage(evt) {
  evt.preventDefault();
  togglePageVisibility(refs.mainPage, [refs.mainLibrary, refs.mainDetailsPage]);

  clearDetailsPage();

  // addEventListener
  addHomePageListeners();

  //removeEventListener
  removeLibraryPageListeners();
  removeDetailsPageListeners();
}

function activeLibraryPage(evt) {
  evt.preventDefault();
  togglePageVisibility(refs.mainLibrary, [refs.mainPage, refs.mainDetailsPage]);

  clearDetailsPage();
  refs.libraryGallery.innerHTML = '';

  createGallery(globalValue.getFilmsQueue(), 'queue');
  refs.buttQue.classList.add('active-but-lib');
  refs.buttWatch.classList.remove('active-but-lib');

  // addEventListener
  addLibraryPageListeners();

  //removeEventListener
  removeHomePageListeners();
  removeDetailsPageListeners();
}

// ===================
function activeDetailsPage(movieId) {
  togglePageVisibility(refs.mainDetailsPage, [refs.mainPage, refs.mainLibrary]);

  showDetails(movieId);

  // addEventListener
  addDetailsPageListeners();

  //removeEventListener
  removeHomePageListeners();
  removeLibraryPageListeners();
}

const togglePageVisibility = (visiblePage, notVisiblePages) => {
  if (visiblePage.classList.contains('is-hidden')) {
    visiblePage.classList.remove('is-hidden');
  }
  notVisiblePages.forEach(page => page.classList.add('is-hidden'));
  errorPage.hiddenErrorPage();
};

const startDetailsFilm = ({ target }) => {
  if (target.localName !== 'ul') {
  activeDetailsPage(target.parentElement.children[2].dataset.id);
  }
};

const startDetailsLibraryFilm = ({ target }) => {
  if (target.localName !== 'ul') {
  activeDetailsPage(target.parentElement.children[2].dataset.id);
  }
};

const startQueueGallery = ({ target }) => {
  createLibraryGallery(target, refs.buttWatch, globalValue.getFilmsQueue());
};

const startWatchedGallery = ({ target }) => {
  createLibraryGallery(target, refs.buttQue, globalValue.getFilmsWatched());
};

//-----------add event listeners--------------
const addHomePageListeners = () => {
  refs.homePageGallery.addEventListener('click', startDetailsFilm);
  refs.divPagination.addEventListener('click', plaginationNavigation);
  refs.formInput.addEventListener('submit', searchFilms);
};

const addLibraryPageListeners = () => {
  refs.buttQue.addEventListener('click', startQueueGallery);
  refs.buttWatch.addEventListener('click', startWatchedGallery);
  refs.libraryGallery.addEventListener('click', startDetailsLibraryFilm);
};

const addDetailsPageListeners = () => {
  refs.btnToQueue.addEventListener('click', storage.toggleToQueue);
  refs.btnToWatched.addEventListener('click', storage.toggleToWatched);
};

//-----------remove event listeners--------------
const removeHomePageListeners = () => {
  refs.homePageGallery.removeEventListener('click', startDetailsFilm);
  refs.divPagination.removeEventListener('click', plaginationNavigation);
  refs.formInput.removeEventListener('submit', searchFilms);
};

const removeLibraryPageListeners = () => {
  refs.buttQue.removeEventListener('click', startQueueGallery);
  refs.buttWatch.removeEventListener('click', startWatchedGallery);
  refs.libraryGallery.removeEventListener('click', startDetailsLibraryFilm);
};

const removeDetailsPageListeners = () => {
  refs.btnToQueue.removeEventListener('click', storage.toggleToQueue);
  refs.btnToWatched.removeEventListener('click', storage.toggleToWatched);
};

//-----------clearing-------------
const clearDetailsPage = () => {
  refs.imgDetailsWrapper.innerHTML = '';
  refs.infoDetailsBox.innerHTML = '';
};

export { activeHomePage, activeDetailsPage };
