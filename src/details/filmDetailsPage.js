import moviesApi from '../services/moviesApi';
import templatesDetailsFilm from '../templates/detailsFilm.hbs';
import getYear from '../utils/getYear';
import refs from '../dom/refs';

const filmsQueue = [];
const filmsWatched = [];

const showDetails = (movieId, itsLibraryFilm) => {
  createDetails(movieId);
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
      ? 'Delete from queue'
      : 'Add to queue';
    refs.btnToWatched.textContent = textBtnWatched;
  }
};

const checkFilmToQueue = movieId => filmsQueue.find(({ id }) => id === movieId);

const checkFilmToWatched = movieId =>
  filmsWatched.find(({ id }) => id === movieId);

const createDetails = movieId => {
  moviesApi
    .fetchMovieDetails(movieId)
    .then(data => markupDetailsPage(data))
    .catch(error => console.error(error));
};

const markupDetailsPage = data => {
  const film = { ...data, year: getYear(data) };
  refs.mainDetailsPage.insertAdjacentHTML(
    'beforeend',
    templatesDetailsFilm(film),
  );
  monitorButtonStatusText(movieId, itsLibraryFilm);
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
