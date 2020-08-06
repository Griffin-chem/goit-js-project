import itemFilm from '../templates/itemFilm.hbs';

const createCardFunc = items => items.map(item => itemFilm(item)).join('');

export default createCardFunc;
