import storage from '../details/storage';

export default {
  pageNumber: 1,
  filmsQueue: [],
  filmsWatched: [],

  //----pageNumber----
  getPageNumber() {
    return this.pageNumber;
  },

  resetPageNumber() {
    this.pageNumber = 1;
  },

  incrementPageNumber() {
    this.pageNumber += 1;
  },

  decrementPageNumber() {
    this.pageNumber -= 1;
  },
  //-------------------

  //----filmsQueue----
  getFilmsQueue() {
    return this.filmsQueue;
  },

  setFilmsQueue() {
    this.filmsQueue = storage.checkLocalStorage('filmsQueue');
  },
  //-------------------

  //----filmsWatched----
  getFilmsWatched() {
    return this.filmsWatched;
  },

  setFilmsWatched() {
    this.filmsWatched = storage.checkLocalStorage('filmsWatched');
  },
  //-------------------
};
