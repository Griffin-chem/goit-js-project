export default {
  pageNumber: 1,

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
};
