import refs from '../dom/refs';
import createCardsFunc from '../utils/createCardsFunc';
import globalValue from '../globalValue/globalValue';

const createGallery = (films, galleryLibName) => {
  total = 6;
  pageNow = 1;
  refs.errorLib.classList.add('displayNone');
  const filmsix = films.filter((film, index) => {
    if (index <= 5) {
      return film;
    }
  });

  if (films.length > 0) {
    refs.divPaginationLib.classList.remove('displayNone');
    refs.prevBtnLib.classList.add('hidden');
    refs.nextBtnLib.classList.remove('hidden');
    refs.numberPageLib.textContent = `1 - ${Math.ceil(films.length / 6)}`;
    films.length <= 6
    ? refs.divPaginationLib.classList.add('displayNone')
    : refs.divPaginationLib.classList.remove('displayNone');
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

refs.prevBtnLib.classList.add('hidden');

let pageNow;
let total = 6;
let filmsNumbers;
let arrFilms;

const incrementPage = () => {
  total += 6;
};
const decrementPage = () => {
  if (total >= 6) {
    total -= 6;
  } else if (total === 0) {
    return;
  }
};


refs.divPaginationLib.addEventListener('click', paginationLibrary);

function paginationLibrary(e) {
  e.preventDefault();

  if (refs.buttWatch.classList.contains('active-but-lib')) {
    filmsNumbers = globalValue.getFilmsWatched().length;
    arrFilms = globalValue.getFilmsWatched();
  } else if (refs.buttQue.classList.contains('active-but-lib')) {
    arrFilms = globalValue.getFilmsQueue();
    filmsNumbers = globalValue.getFilmsQueue().length;
  } else {
    return;
  }

  const allFilmsPages = Math.ceil(filmsNumbers / 6);

  if (e.target.id === 'prevLib' && total > 6) {
    refs.libraryGallery.innerHTML = '';
    const prevPageFilms = arrFilms.filter((film, index) => {
      if (index < total - 6 && index >= total - 12) {
        return film;
      }
    });
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(prevPageFilms),
    );
    decrementPage();
  } else if (e.target.id === 'nextLib' && total <= filmsNumbers) {
    refs.libraryGallery.innerHTML = '';
    const nextPageFilms = arrFilms.filter((film, index) => {
      if (index > total - 1 && index < total + 6) {
        return film;
      }
    });
    refs.libraryGallery.insertAdjacentHTML(
      'beforeend',
      createCardsFunc(nextPageFilms),
    );
    incrementPage();
  } else {
    return;
  }
  pageNow = total / 6;

  pageNow > 1
    ? refs.prevBtnLib.classList.remove('hidden')
    : refs.prevBtnLib.classList.add('hidden');

  pageNow === allFilmsPages
    ? refs.nextBtnLib.classList.add('hidden')
    : refs.nextBtnLib.classList.remove('hidden');

  refs.numberPageLib.textContent = `${pageNow} - ${allFilmsPages}`;
}
