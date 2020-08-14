import globalValue from '../globalValue/globalValue';
import refs from '../dom/refs';
import renderHomePage from '../utils/render';
import moviesApi from '../services/moviesApi';
import spinner from '../loader/loader';
import { activeHomePage } from '../header/navigation';
import errorPage from '../errorPage/errorPage';
fetchPopularMoviesList(globalValue.getPageNumber());

window.addEventListener('DOMContentLoaded', activeHomePage);

export default function fetchPopularMoviesList(pageNumber) {
  spinner.showLoder();
  moviesApi
    .fetchPopularMovies(pageNumber)
    .then(data => {
      renderHomePage(data);
      refs.numberPage.textContent = `${globalValue.getPageNumber()} - ${
        data.total_pages
      }`;
    })
    .catch(error => {
      errorPage.showErrorPage();
      console.log(error);
    })
    .finally(() => {
      spinner.hiddenLoader();
    });
}
