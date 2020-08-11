import moviesApi from '../services/moviesApi';
import templatesDetailsFilm from '../templates/detailsFilm.hbs';
import templatesDetailsImg from '../templates/detailsImg.hbs';
import getYear from '../utils/getYear';
import refs from '../dom/refs';
import spinner from '../loader/loader';

const filmsQueue = [];
const filmsWatched = [];

const showDetails = (movieId, itsLibraryFilm) => {
  createDetails(movieId);
  monitorButtonStatusText(film.id, itsLibraryFilm);
};
/*
 * пишем функцию monitorButtonStatusText которая следит за состоянием (значок и текст в кнопке)
 * читает  local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках:
 * Delete from queue / Add to queue ; Delete from watched / Add to watched.
 */
const monitorButtonStatusText = (movieId, itsLibraryFilm) => {
  if (itsLibraryFilm) {
    const textBtnQueue = checkFilmToQueue(movieId)
      ? 'Delete from queue'
      : 'Add to queue';
    refs.btnToQueue.textContent = textBtnQueue;

    const textBtnWatched = checkFilmToWatched(movieId)
      ? 'Delete from watched'
      : 'Add to watched';
    refs.btnToWatched.textContent = textBtnWatched;
  }
};

const checkFilmToQueue = movieId => filmsQueue.find(({ id }) => id === movieId);

const checkFilmToWatched = movieId =>
  filmsWatched.find(({ id }) => id === movieId);

const createDetails = movieId => {
  spinner.showLoder();
  moviesApi
    .fetchMovieDetails(movieId)
    .then(data => markupDetailsPage(data))
    .catch(error => console.error(error))
    .finally(()=>{
     spinner.hiddenLoader();
    });
};

const markupDetailsPage = (data, itsLibraryFilm) => {
  const film = { ...data, year: getYear(data) };
  refs.imgDetailsWrapper.insertAdjacentHTML(
    'beforeend',
    templatesDetailsImg(film),
  );
  refs.infoDetailsBox.insertAdjacentHTML(
    'beforeend',
    templatesDetailsFilm(film),
  );
};

export { showDetails };

const film = {
  adult: false,
  backdrop_path: '/t4FHFL6hckU9vohbqO2k7rYGWhF.jpg',
  belongs_to_collection: null,
  budget: 1200000,
  genres: Array(2),
  0: { id: 80, name: 'Crime' },
  1: { id: 53, name: 'Thriller' },
  length: 2,
  __proto__: Array(0),
  homepage: '',
  id: 500,
  imdb_id: 'tt0105236',
  original_language: 'en',
  original_title: 'Reservoir Dogs',
  overview:
    'A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.',
  popularity: 27.31,
  poster_path: '/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg',
  release_date: '1992-09-02',
  revenue: 2859750,
  runtime: 99,
  status: 'Released',
  tagline: 'Every dog has his day.',
  title: 'Reservoir Dogs',
  video: false,
  vote_average: 8.2,
  vote_count: 9497,
};
