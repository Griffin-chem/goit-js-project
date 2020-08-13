// import storage from '../details/storage';
// import filmsWached from './movies';
import refs from '../dom/refs';
import { activeDetailsPage } from '../header/navigation';

import createCardsFunc from '../utils/createCardsFunc';

const createGallery = (films, galleryLibName) => {
  if (films) {
    refs.libraryGallery.insertAdjacentHTML('beforeend', createCardsFunc(films));
  } else {
    const message = `You do not have to ${galleryLibName} movies to watch. Add them.`;
    console.log(message);
  }
};

const createLibraryGallery = (target, button, films) => {
  refs.libraryGallery.innerHTML = '';
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  console.log(target.dataset.target); ///
  createGallery(films, target.dataset.target);
};

export { createGallery, createLibraryGallery };
