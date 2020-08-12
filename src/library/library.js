// import storage from '../details/storage';
// import filmsWached from './movies';
import refs from '../dom/refs';
import { activeDetailsPage } from '../header/navigation';

import createCardsFunc from '../utils/createCardsFunc';

const createGallery = films => {
  refs.libraryGallery.insertAdjacentHTML('beforeend', createCardsFunc(films));
};

const createLibraryGallery = (target, button, films) => {
  refs.libraryGallery.innerHTML = '';
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  createGallery(films);
};

export { createGallery, createLibraryGallery };
