import refs from '../dom/refs';
import { plaginationNavigation } from '../search/searchAndPagination';
import { createGallery, createLibraryGallery } from '../library/library';
import { showDetails } from '../details/filmDetailsPage';
import filmsQueue from '../library/movies';
import filmsWached from '../library/movies';
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
  refs.divPagination.addEventListener('click', plaginationNavigation); //TODO

  // refs.homePageGallery.addEventListener('click', ({ target }) => {
  //   activeDetailsPage(target.dataset.id, false);
  // });

  refs.buttWatch.removeEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttQue, filmsWached),
  );
  refs.buttQue.removeEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttWatch, filmsQueue),
  );
}

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
  refs.buttWatch.addEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttQue, filmsWached),
  );
  refs.buttQue.addEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttWatch, filmsQueue),
  );
}
// ===================
export function activeDetailsPage(movieId, itsLibraryFilm) {
  if (refs.mainDetailsPage.classList.contains('is-hidden')) {
    refs.mainDetailsPage.classList.remove('is-hidden');
  }

  refs.mainPage.classList.add('is-hidden');
  refs.mainLibrary.classList.add('is-hidden');

  showDetails(movieId, itsLibraryFilm);
  // ===============================
  refs.buttWatch.removeEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttQue, filmsWached),
  );
  refs.buttQue.removeEventListener('click', ({ target }) =>
    createLibraryGallery(target, refs.buttWatch, filmsQueue),
  );

  // refs.addToWatched.EventListener('click', callback);
  // refs.addToQueue.EventListener('click', callback);

  // refs.addToWatched.addEventListener('click', callback);
  // refs.addToQueue.addEventListener('click', callback);
}
