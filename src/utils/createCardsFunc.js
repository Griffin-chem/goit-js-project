import itemFilm from '../templates/itemFilm.hbs';
import getYear from './getYear';

const createCardsFunc = items =>
  items
    .map(item => {
      const film = { ...item, year: getYear(item) };
      return itemFilm(film);
    })
    .join('');

export default createCardsFunc;
