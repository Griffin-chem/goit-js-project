import refs from '../dom/refs';
// import { join } from 'lodash';
// export default {
//     homePageGallery: document.querySelector('.js-main-page'),
//     formInput: document.querySelector('.formSearch'),
//     input: document.querySelector('.inputSearch'),
//     divPagination: document.querySelector('.pagination'),
//     prevBtn: document.querySelector('#prev'),
//     nextBtn: document.querySelector('#next'),
//     numberPage: document.querySelector('.numberPage'),
//     errorDiv: document.querySelector('.errorSearch'),
//     // ======================
// navHome:document.querySelector('.js-link-to-home'),
//    mainPage: document.querySelector('.main-page'),
// navLibrary:document.querySelector('.js-link-to-myLibrary'),
// mainLibraryWatched:document.querySelector('.js-library-watched'),
// mainLibraryQueue:document.querySelector('.js-library-queue'),
// mainDetailsPage:document.querySelector('.js-details-page'),
// addToWatched:document.querySelector('.js-details-page--toWatched'),
// addToQueue:document.querySelector('.js-details-page--toQueue'),
// logo:document.querySelector('.logo-block--logo'),
// };
// ==========================
let selectFilm;

// =====================================

function activeLibraryPage() {
          // показывает страницу с библиотекой
    if (refs.mainLibraryQueue.classList.contains('is-hidden'))
      refs.mainLibraryQueue.classList.remove('is-hidden');
    // console.log(refs.navLibrary);
    // console.log(6789);
    // прячет остальные
    refs.mainPage.classList.add('is-hidden')
    refs.mainLibraryWatched.classList.add('is-hidden');
    refs.mainDetailsPage.classList.add('is-hidden');

    // запускает функцию отрисовки фильмов из очереди drawQueueFilmList
    // drawQueueFilmList();
    // (которую сделает пятый участник)

    // добавляет кнопке списка очереди фильмов эффект


    // выбранной с помощью класса

    // удаляет ненужных всех слушателей (таких 4 во всем проекте не
    // нужных на этой странице);
    // refs.addToWatched.removeEventListener('click', callback);
    // refs.addToQueue.removeEventListener('click', callback);
//   }
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

// }

// ==================
// вешаем слушателей на переход на домашнюю страницу и страницу библиотеки в хедере.
refs.navHome.addEventListener('click', activeHomePage);
refs.navLibrary.addEventListener('click', activeLibraryPage);
// ===================
// на логотип повесить запуск функции activeHomePage, чтобы при клике туда возвращаться.
refs.logo.addEventListener('click', activeHomePage);

// ===================
