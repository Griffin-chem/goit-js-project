import refs from '../dom/refs';
import { activeDetailsPage } from '../header/navigation';

import createCardsFunc from '../utils/createCardsFunc';

const createGallery = (films, galleryLibName) => {
  const filmsix = films.filter((film, index) => {
    if (index <= 5) {
      return film;
    }
  });

  if (films.length > 0) {
    refs.numberPageLib.textContent = `1 - ${Math.ceil(films.length / 6)}`;
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(filmsix),
    );
  } else {
    const message = `<li class="message"><span>You do not have to ${galleryLibName} movies to watch. Add them.</span></li>`;
    refs.libraryGallery.innerHTML = message;
  }
};

const createLibraryGallery = (target, button, films) => {
  refs.libraryGallery.innerHTML = '';
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  createGallery(films, target.dataset.target);
};

export { createGallery, createLibraryGallery };
