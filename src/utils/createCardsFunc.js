import itemFilm from '../templates/itemFilm.hbs';

const createCardsFunc = items => items.map(item => itemFilm(item)).join('');

export default createCardsFunc;
