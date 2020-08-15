import globalValue from '../globalValue/globalValue';
import createCardsFunc from './createCardsFunc';
import refs from '../dom/refs';

export default function render({ results, total_pages }) {
  total_pages === 1
    ? refs.divPagination.classList.add('displayNone')
    : refs.nextBtn.classList.remove('displayNone');

  total_pages === globalValue.getPageNumber()
    ? refs.nextBtn.classList.add('displayNone')
    : refs.nextBtn.classList.remove('displayNone');

  if (globalValue.getPageNumber() === 1) {
    refs.prevBtn.classList.add('displayNone');
  }

  if (results.length === 0) {
    refs.errorDiv.classList.remove('displayNone');
    refs.homePageGallery.innerHTML = '';
    return;
  }
  refs.homePageGallery.innerHTML = '';
  refs.errorDiv.classList.add('displayNone');

  refs.homePageGallery.insertAdjacentHTML(
    'beforeend',
    createCardsFunc(results),
  );
  window.scrollTo(0, 0);
}
