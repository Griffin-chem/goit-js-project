import refs from '../dom/refs';
import createCardsFunc from '../utils/createCardsFunc';

const createGallery = (films, galleryLibName) => {
  refs.errorLib.classList.add('displayNone');
  const filmsix = films.filter((film, index) => {
    if (index <= 5) {
      return film;
    }
  });

  films.length <= 6
    ? refs.divPaginationLib.classList.add('displayNone')
    : refs.divPaginationLib.classList.remove('displayNone');

  if (films.length > 0) {
    refs.divPaginationLib.classList.remove('displayNone')
    refs.numberPageLib.textContent = `1 - ${Math.ceil(films.length / 6)}`;
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(filmsix),
    );
  } else {
    const message = `You don't have any movies in ${galleryLibName} library. Add them.`;
    refs.errorLib.textContent = message;
    refs.errorLib.classList.remove('displayNone');
    refs.divPaginationLib.classList.add('displayNone');
  }
};

const createLibraryGallery = (target, button, films) => {
  refs.libraryGallery.innerHTML = '';
  target.classList.add('active-but-lib');
  button.classList.remove('active-but-lib');
  createGallery(films, target.dataset.target);
};

export { createGallery, createLibraryGallery };
