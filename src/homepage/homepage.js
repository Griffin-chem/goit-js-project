import globalValue from '../globalValue/globalValue';
import renderHomePage from '../utils/render';
import moviesApi from '../services/moviesApi';
import spinner from '../loader/loader';
import { activeHomePage } from '../header/navigation';

fetchPopularMoviesList(globalValue.getPageNumber());

window.addEventListener('DOMContentLoaded', activeHomePage);

export default function fetchPopularMoviesList(pageNumber) {
  spinner.showLoder();
  moviesApi
    .fetchPopularMovies(pageNumber)
    .then(data => {
      renderHomePage(data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      spinner.hiddenLoader();
    });
}
