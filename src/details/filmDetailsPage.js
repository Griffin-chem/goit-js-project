import moviesApi from '../services/moviesApi';
import templatesDetailsFilm from '../templates/detailsFilm.hbs';
import templatesDetailsImg from '../templates/detailsImg.hbs';
import getYear from '../utils/getYear';
import refs from '../dom/refs';
import spinner from '../loader/loader';
import storage from './storage';

// const filmsQueue = [{ id: 583083 }, { id: 561 }]; ///
// const filmsWatched = [{ id: 561 }]; ///

let selectFilm = {};

const showDetails = (movieId, itsLibraryFilm) => {
  createDetails(movieId);
  monitorButtonStatusText(movieId, itsLibraryFilm);
};
/*
 * пишем функцию monitorButtonStatusText которая следит за состоянием (значок и текст в кнопке)
 * читает  local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках:
 * Delete from queue / Add to queue ; Delete from watched / Add to watched.
 */
const monitorButtonStatusText = () => {
  const checkQueue = checkFilmToQueue(selectFilm.id);
  const textBtnQueue = checkQueue ? 'Delete from queue' : 'Add to queue';
  const oldClassQueue = checkQueue ? 'icon-add-queue' : 'icon-remove-queue';
  const newClassQueue = checkQueue ? 'icon-remove-queue' : 'icon-add-queue';
  refs.btnToQueue.classList.replace(oldClassQueue, newClassQueue);
  refs.btnToQueue.textContent = textBtnQueue;
  refs.btnToQueue.dataset.action = checkQueue ? 'del' : 'add';

  const checkWatched = checkFilmToWatched(selectFilm.id);
  const textBtnWatched = checkWatched
    ? 'Delete from watched'
    : 'Add to watched';
  const oldClassWatched = checkWatched
    ? 'icon-add-watched'
    : 'icon-remove-watched';
  const newClassWatched = checkWatched
    ? 'icon-remove-watched'
    : 'icon-add-watched';
  refs.btnToWatched.classList.replace(oldClassWatched, newClassWatched);
  refs.btnToWatched.textContent = textBtnWatched;
  refs.btnToWatched.dataset.action = checkWatched ? 'del' : 'add';
};

const checkFilmToQueue = movieId => {
  const filmsQueue = storage.checkLocalStorage('filmsQueue');
  return filmsQueue.find(({ id }) => id === movieId);
};

const checkFilmToWatched = movieId => {
  const filmsWatched = storage.checkLocalStorage('filmsWatched');
  filmsWatched.find(({ id }) => id === movieId);
};

const createDetails = movieId => {
  spinner.showLoder();
  moviesApi
    .fetchMovieDetails(movieId)
    .then(data => {
      selectFilm = { ...data };
      markupDetailsPage(data);
    })
    .catch(error => console.error(error))
    .finally(() => {
      spinner.hiddenLoader();
      monitorButtonStatusText();
    });
};

const markupDetailsPage = data => {
  const film = {
    ...data,
    year: getYear(data),
  };
  refs.imgDetailsWrapper.insertAdjacentHTML(
    'beforeend',
    templatesDetailsImg(film),
  );
  refs.infoDetailsBox.insertAdjacentHTML(
    'beforeend',
    templatesDetailsFilm(film),
  );
};

export { showDetails, selectFilm };
refs.btnToQueue.addEventListener('click', storage.toggleToQueue);
refs.btnToQueue.addEventListener('click', monitorButtonStatusText);
refs.btnToWatched.addEventListener('click', storage.toggleToWatched);
refs.btnToWatched.addEventListener('click', monitorButtonStatusText);
