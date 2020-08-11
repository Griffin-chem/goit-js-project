let selectFilm = {
  title: 'Title',
  release_date: '1900-12-31',
  vote_average: 0.0,
  poster_path: '',
  id: 0
}

const toggleToQueue = (event) => {
  // Check localStorage for key "filmsQueue"
  if (window.localStorage.hasOwnProperty('filmsQueue')) {
    const queueFilmData = JSON.parse(window.localStorage.getItem('filmsQueue'))
  } else {
    queueFilmData = [];
  };
  // Add or remove selectFilm from Queue
  switch (event.target.dataset.action) {
    case 'add':
    queueFilmData.push(selectFilm);
    window.localStorage.setItem('filmsQueue', JSON.stringify(queueFilmData));
      break;
    case 'del':
    const updatedQueue = queueFilmData.filter(film => {
      console.log(film.id);
      console.log(selectFilm.id);
      return (film.id !== selectFilm.id)});
    window.localStorage.setItem('filmsQueue', JSON.stringify(updatedQueue));
      break;
  }
};

const toggleToWatched = (event) => {
  // Check localStorage for key "filmsWatched"
  if (window.localStorage.hasOwnProperty('filmsWatched')) {
    const watchedFilmData = JSON.parse(window.localStorage.getItem('filmsWatched'))
  } else {
    const watchedFilmData = [];
  };
  // Add or remove selectFilm from Watched
  switch (event.target.dataset.action) {
    case 'add':
    watchedFilmData.push(selectFilm);
    window.localStorage.setItem('filmsQueue', JSON.stringify(watchedFilmData));
      break;
    case 'del':
    const updatedWatched = watchedFilmData.filter(film => {
      console.log(film.id);
      console.log(selectFilm.id);
      return (film.id !== selectFilm.id)});
    window.localStorage.setItem('filmsQueue', JSON.stringify(updatedWatched));
      break;
  }
};

export {toggleToWatched, toggleToQueue};