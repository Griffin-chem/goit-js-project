import { monitorButtonStatusText, selectFilm } from './filmDetailsPage';
import globalValue from '../globalValue/globalValue';

const checkLocalStorage = key => {
  try {
    return (JSON.parse(window.localStorage.getItem(key)) === null)
    ? JSON.parse(window.localStorage.getItem(key))
    : [];
  } catch (error) {
    return [];
  }
};

const performDataAction = ({ action }, filmData) => {
  switch (action) {
    case 'add':
      return filmData.concat([selectFilm]);
    case 'del':
      return filmData.filter(film => film.id !== selectFilm.id);
  }
};

const toggleToQueue = ({ target }) => {
  const updateQueue = performDataAction(
    target.dataset,
    globalValue.getFilmsQueue(),
  );
  window.localStorage.setItem('filmsQueue', JSON.stringify(updateQueue));
  globalValue.setFilmsQueue();
  monitorButtonStatusText();
};

const toggleToWatched = ({ target }) => {
  const updateWatched = performDataAction(
    target.dataset,
    globalValue.getFilmsWatched(),
  );
  window.localStorage.setItem('filmsWatched', JSON.stringify(updateWatched));
  globalValue.setFilmsWatched();
  monitorButtonStatusText();
};

export default {
  toggleToWatched,
  toggleToQueue,
  checkLocalStorage,
};
