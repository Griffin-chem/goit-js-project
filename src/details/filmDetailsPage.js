import moviesApi from '../services/moviesApi';
import templatesDetailsFilm from '../templates/detailsFilm.hbs';
import templatesDetailsImg from '../templates/detailsImg.hbs';
import getYear from '../utils/getYear';
import refs from '../dom/refs';
import globalValue from '../globalValue/globalValue';
import spinner from '../loader/loader';

let selectFilm = {};

const showDetails = movieId => {
  createDetails(movieId);
  getTrailerFilm(movieId);
};

const getTrailerFilm = movieId => {
  moviesApi.fetchGetVideos(movieId).then(result => {
    const trailerURL = `https://www.youtube.com/embed/${result.results[0].key}`;
    refs.player.setAttribute('src', trailerURL);
  });
};

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
  return globalValue.getFilmsQueue().find(({ id }) => id === movieId);
};

const checkFilmToWatched = movieId => {
  return globalValue.getFilmsWatched().find(({ id }) => id === movieId);
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

export { showDetails, monitorButtonStatusText, selectFilm };
