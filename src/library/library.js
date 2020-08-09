import filmsQueue from './movies';
import filmsWached from './movies';
import refs from '../dom/refs';
import createLibraryCardsFunc from '../utils/createCardsFunc';

refs.libraryGallery.insertAdjacentHTML(
  'beforeend',
  createLibraryCardsFunc(filmsQueue),
);

refs.libraryGallery.addEventListener('click', ({ target }) => {
  activeDetailsPage(target.id, true);
});
// потом удалить :
const activeDetailsPage = (movieId, boole) => {
  console.log(movieId);
  console.log(boole);
};
function createLibraryGallery(target, button, films) {
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  refs.libraryGallery.insertAdjacentHTML(
    'beforeend',
    createLibraryCardsFunc(films),
  );
}

//   ---
refs.buttWatch.addEventListener('click', ({ target }) =>
  createLibraryGallery(target, refs.buttQue, filmsWached),
);
refs.buttQue.addEventListener('click', ({ target }) =>
  createLibraryGallery(target, refs.buttWatch, filmsQueue),
);
