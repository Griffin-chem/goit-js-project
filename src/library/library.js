import filmsQueue from './movies';
import filmsWached from './movies';
import refs from '../dom/refs';
import { activeDetailsPage } from '../header/navigation';


import createCardsFunc from '../utils/createCardsFunc';

const createGallery = films => {
  refs.libraryGallery.insertAdjacentHTML('beforeend', createCardsFunc(films));
};

// refs.libraryGallery.insertAdjacentHTML('beforeend', createLibraryCardsFunc(filmsQueue));

refs.libraryGallery.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.dataset.id, true);
});
// потом удалить :
// const activeDetailsPage = (movieId, boole) => {
//   console.log(movieId);
//   console.log(boole);
// };

const createLibraryGallery = (target, button, films) => {
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  createGallery(films);
  // refs.libraryGallery.insertAdjacentHTML('beforeend', createLibraryCardsFunc(films));
};

//   ---
// refs.buttWatch.addEventListener('click', ({ target }) =>
//   createLibraryGallery(target, refs.buttQue, filmsWached),
// );
// refs.buttQue.addEventListener('click', ({ target }) =>
//   createLibraryGallery(target, refs.buttWatch, filmsQueue),
// );

export { createGallery, createLibraryGallery };
