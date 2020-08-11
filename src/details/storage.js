import {selectFilm} from './filmDetailsPage';

const checkLocalStorage = key => {
  try {
    return (JSON.parse(window.localStorage.getItem(key)) !== null) 
    ? JSON.parse(window.localStorage.getItem(key)) 
    : [];
  } 
  catch (error) {
    return [];
  }
};

const performDataAction = ({action}, filmData) => {
  switch (action) {
    case 'add':
      return filmData.concat([selectFilm]);
    case 'del':
      return filmData.filter(film => film.id !== selectFilm.id);
  }
};

// toggleToQueue({ target: { dataset: { action: 'add' } } });

const toggleToQueue = ({target}) => {
  const queueFilmData = checkLocalStorage('filmsQueue');
  const updateQueue = performDataAction(target.dataset, queueFilmData);
  window.localStorage.setItem('filmsQueue', JSON.stringify(updateQueue));
};

const toggleToWatched = ({target}) => {
  const watchedFilmData = checkLocalStorage('filmsWatched');
  const updateWatched = performDataAction(target.dataset, watchedFilmData);
  localStorage.setItem('filmsWatched', JSON.stringify(updateWatched));
};

export default {
  toggleToWatched,
  toggleToQueue,
  checkLocalStorage
};
