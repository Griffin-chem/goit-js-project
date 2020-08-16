import globalValue from '../globalValue/globalValue';
import createCardsFunc from './createCardsFunc';
import refs from '../dom/refs';

export default function render({ results, total_pages }) {
  refs.divPagination.classList.remove('displayNone');
  total_pages === 1
    ? refs.divPagination.classList.add('displayNone')
    : refs.nextBtn.classList.remove('hidden');

  total_pages === globalValue.getPageNumber()
    ? refs.nextBtn.classList.add('hidden')
    : refs.nextBtn.classList.remove('hidden');

  if (globalValue.getPageNumber() === 1) {
    refs.prevBtn.classList.add('hidden');
  }

  if (results.length === 0) {
    refs.errorDiv.classList.remove('displayNone');
    refs.divPagination.classList.add('displayNone');
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
