import itemFilm from '../templates/itemFilm.hbs';

const getYear = ({ release_date }) => new Date(release_date).getFullYear();

const createCardsFunc = items =>
  items
    .map(item => {
      const film = { ...item, year: getYear(item) };
      return itemFilm(film);
    })
    .join('');

export default createCardsFunc;
