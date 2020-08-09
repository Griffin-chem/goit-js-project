import refs from '../dom/refs';
import { plaginationNavigation } from '../search/searchAndPagination';
import { createGallery, createLibraryGallery } from '../library/library';
import filmsQueue from '../library/movies';
import filmsWached from '../library/movies';
// import { join } from 'lodash';

// let selectFilm;

// =====================================
function activeHomePage(evt) {
  evt.preventDefault();
  if (refs.mainPage.classList.contains('is-hidden')) {
    refs.mainPage.classList.remove('is-hidden');
  }
  refs.mainLibrary.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
  // =======================================
  // запускать слушатель на старте страницы
  refs.divPagination.addEventListener('click', plaginationNavigation);
}

// ====================================

function activeLibraryPage(evt) {
  evt.preventDefault();
  // показывает страницу с библиотекой
  if (refs.mainLibrary.classList.contains('is-hidden')) {
    refs.mainLibrary.classList.remove('is-hidden');
  }

  // прячет остальные
  refs.mainPage.classList.add('is-hidden');
  refs.mainDetailsPage.classList.add('is-hidden');
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
// function activeDetailsPage (movieId,itsLibraryFilm){

// movieId,itsLibraryFilm((это bool), и в зависимости
// от того это выбранный фильм с домашней страницы или из библиотеки*/))

// показывает страницу детальной отрисовки фильма
// if (refs.mainDetailsPage.classList.contains('is-hidden'))
//       refs.mainDetailsPage.classList.remove('is-hidden');
// прячет остальные страницы
//     refs.mainPage.classList.add('hidden');
//     refs.mainLibraryWatched.classList.add('hidden');
//     refs.mainLibraryQueue.classList.add('hidden');
// // заполняет глобальную переменную selectFilm нужным объектом
// selectFilm = ( нужный обьект)
// запускает функцию  showDetails( эту функцию делает №4)
//   showDetails();
// вешает слушателей на кнопки добавления/удаления фильмов в очередь просмотра
// refs.addToWatched.EventListener('click', callback);
// refs.addToQueue.EventListener('click', callback);

// вешает слушателей на кнопки добавления/удаления фильмов из просмотренных
//  со страницы detailsPage
// refs.addToWatched.addEventListener('click', callback);
// refs.addToQueue.addEventListener('click', callback);
// удаляет ненужных всех слушателей (таких 4 во всем проекте
// не нужных на этой странице)

// ==================
// вешаем слушателей на переход на домашнюю страницу и страницу библиотеки в хедере.
refs.navHome.addEventListener('click', evt => activeHomePage(evt));
refs.navLibrary.addEventListener('click', evt => activeLibraryPage(evt));
// ===================
// на логотип повесить запуск функции activeHomePage, чтобы при клике туда возвращаться.
refs.logo.addEventListener('click', evt => activeHomePage(evt));

// ===================
