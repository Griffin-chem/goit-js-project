'use strick';

import templateButton from './templates/form.hbs';
import moviesApi from '../services/moviesApi';
import templatesDetailsFilm from '../templates/detailsFilm.hbs';
import templatesDetailsImg from '../templates/detailsImg.hbs';
import getYear from '../utils/getYear';
import refs from '../dom/refs';

const filmDetalisPage = {
	// из DOM достукивается до нужных кнопок участник 3
	//  и вешает функции toggleToQueue и toggleToWatched
	//  слушателями на страницу деталей и удаляет там где не нужно.

	//elementForm - массив элементов для работы
	elementForm: {},

	options: {
    dateFilm:{},
		queue: {
			boxFilm: 'filmsQueue', // имя коробки c элементами icon and button,  name in localStorage
			delete: 'Delete from queue', // change text
			add: 'Add to queue', //start text
			icon: 'fas', //не низменное в иконке
			iconNot: 'fa-video', // стартовая иконка
			iconYes: 'fa-film' //на то что должна меняться
		},
		watched: {
			boxFilm: 'filmsWatched', // имя коробки c элементами icon and button,name in localStorage
			delete: 'Delete from watched', // change text
			add: 'Add to watched', //start text
			icon: 'fa-calendar-plus', //не низменное в иконке
			iconNot: 'fas', // стартовая иконка
			iconYes: 'far' //на то что должна меняться
		}
	},
	//addFormInElem - прорисовывает на страницу разметку html и записывает нужные элементы из формы
	addFormInElem(elem, where = 'beforeend') {
    // чтобы работали icons
     document.querySelector('head').insertAdjacentHTML(where,`<link
    href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
    rel="stylesheet"
  />`);
		const tag = document.querySelector(elem);
		if (elem === undefined) {
			document.querySelector('body').insertAdjacentHTML(where, templateButton(this.options));
			this.refs(elem, this.options);
			return;
    }

		tag.insertAdjacentHTML(where, templateButton(this.options));
		this.refs(elem, this.options);
	},
	// refs - записывает нужные селекторы  из формы
	refs(target, { queue, watched }) {
		const elem = document.querySelector(target);
		this.elementForm = {
			formFilm: elem.querySelector('form[data-name="form-film"]'),
			boxFilmsQueue: elem.querySelector(`button[data-name="${queue.boxFilm}"]`),
			boxFilmsWatched: elem.querySelector(`button[data-name="${watched.boxFilm}"]`),
			buttonQueue: elem.querySelector('button[data-name="button_Queue"]'),
			buttonWatched: elem.querySelector('button[data-name="button_Watched"]'),
			iconQueue: elem.querySelector('i[data-name="icon-Queue"]'),
			iconWatched: elem.querySelector('i[data-name="icon-Watched"]')
		};
	},
	//monitorButtonStatusText - следит за кнопками и изменяет  их данные
	monitorButtonStatusText(selectFilm) {
		this.elementForm.buttonQueue.addEventListener('click', (e) => this.elemEvent(e, this.options, selectFilm));
    this.elementForm.buttonWatched.addEventListener('click', (e) => this.elemEvent(e, this.options, selectFilm));
    refs.homePageGallery.addEventListener('click', (e) =>  this.filmEvent(e, this.options));
	},
filmEvent(e,options){
  const target = e.target;
     let text = moviesApi.fetchMovieDetails(target.dataset.id);
     options.dateFilm = text.then(item =>{
        console.log('item :>> ', item);
        options.dateFilm = item;
return item
    });

},

	toggleToQueue(selectFilm) {
    const remember = this.readingLocalStorage(this.options.queue.boxFilm);
		return remember;

		// пишем функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра),
		//  которая создает переменную массива в очереди,
		//   читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную,
		//    ! также функция вплотную работает с глобальной переменной selectFilm,
		//    и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную,
		//    потом эта функция кладет нашу переменную в local storage,
		// запускает в конце себя функцию monitorButtonStatusText;
	},
	toggleToWatched(selectFilm) {
		const remember = this.readingLocalStorage(this.options.watched.boxFilm);
		return remember;
		// пишем функцию toggleToWatched (будет добавлять или удалять фильмы из просмотренных),
		//  суть ее работы один в один как toggleToQueue только работает с local storage по ключу filmsWatched.
	},

	showDetails(elem, selectFilm) {
		//+ пишем функцию showDetails которая принимает параметром selectFilm (глобальная переменная - объект,
		// +  которая создана в задаче номер три) и рендерит всю разметку согласно макета,
		//+   в этой функции запускается функция monitorButtonStatusText.

		this.addFormInElem(elem);
		this.monitorButtonStatusText(selectFilm);
		this.toggleToWatched(selectFilm);
	},
	// elemEvent -Функция  меняющая и изменяющая иконку и надпись на кнопках
	elemEvent(e, { queue, watched }, selectFilm) {
		e.preventDefault();
		e.stopPropagation();
		const elem = e.target;
		let remember = {};
		switch (elem.innerText) {
			case watched.delete:
				this.elementForm.iconWatched.classList.replace(watched.iconYes, watched.iconNot);
				elem.innerText = watched.add;
				this.addLocalStorage(watched.boxFilm, false,selectFilm , this.toggleToWatched());
				return;
			case watched.add:
				this.elementForm.iconWatched.classList.replace(watched.iconNot, watched.iconYes);
				elem.innerText = watched.delete;
				this.addLocalStorage(watched.boxFilm, true, selectFilm , this.toggleToWatched());
				return;
			case queue.add:
				this.elementForm.iconQueue.classList.replace(queue.iconNot, queue.iconYes);
				elem.innerText = queue.delete;
				this.addLocalStorage(queue.boxFilm, true, selectFilm ,this.toggleToQueue());
				return;
			case queue.delete:
				this.elementForm.iconQueue.classList.replace(queue.iconYes, queue.iconNot);
				elem.innerText = queue.add;
				this.addLocalStorage(queue.boxFilm, false, selectFilm ,this.toggleToQueue());
				return;
			default:
				localStorage.clear();
				console.warn("don't found  LocalStorage ");
				break;
		}
  },


	readingLocalStorage(item) {
		try {
			const elem = JSON.parse(localStorage.getItem(item));
			return elem;
		} catch (error) {
			console.warn('что-то пошло не так в toggleToWatched');
			return;
		}
	},
	// addLocalStorage - записывает значения в локальную историю
	addLocalStorage(boxFilm, bool, film, oldRemember) {
		let remember = {
      ...oldRemember,
      [film]: bool
    };

		try {      //to do
      localStorage.setItem(boxFilm, JSON.stringify(remember));
		} catch (err) {
			console.warn('Не получилось записать в localStorage', err);
		}
	},
};

// При желаний можно всё это изменить
filmDetalisPage.options = {
	queue: {
		boxFilm: 'filmsQueue', // имя коробки c элементами icon and button,  name in localStorage
		delete: 'Delete from queue', // change text
		add: 'Add to queue', //start text
		icon: 'fas', //не низменное в иконке
		iconNot: 'fa-video', // стартовая иконка
		iconYes: 'fa-film' //на то что должна меняться
	},
	watched: {
		boxFilm: 'filmsWatched', // имя коробки c элементами icon and button,name in localStorage
		delete: 'Delete from watched', // change text
		add: 'Add to watched', //start text
		icon: 'fa-calendar-plus', //не низменное в иконке
		iconNot: 'fas', // стартовая иконка
		iconYes: 'far' //на то что должна меняться
	}
};

filmDetalisPage.showDetails('.details-page', 'The name film');

export default {
	filmDetalisPage
};
const filmsQueue = [];
const filmsWatched = [];

const showDetails = (movieId, itsLibraryFilm) => {
  createDetails(movieId);
  monitorButtonStatusText(film.id, itsLibraryFilm);}
/*
 * пишем функцию monitorButtonStatusText которая следит за состоянием (значок и текст в кнопке)
 * читает  local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках:
 * Delete from queue / Add to queue ; Delete from watched / Add to watched.
 */
const monitorButtonStatusText = (movieId, itsLibraryFilm) => {
  if (itsLibraryFilm) {
    const textBtnQueue = checkFilmToQueue(movieId)
      ? 'Delete from queue'
      : 'Add to queue';
    refs.btnToQueue.textContent = textBtnQueue;

    const textBtnWatched = checkFilmToWatched(movieId)
      ? 'Delete from watched'
      : 'Add to watched';
    refs.btnToWatched.textContent = textBtnWatched;
  }
};

const checkFilmToQueue = movieId => filmsQueue.find(({ id }) => id === movieId);

const checkFilmToWatched = movieId =>
  filmsWatched.find(({ id }) => id === movieId);

const createDetails = movieId => {
  moviesApi
    .fetchMovieDetails(movieId)
    .then(data => markupDetailsPage(data))
    .catch(error => console.error(error));
};

const markupDetailsPage = (data, itsLibraryFilm) => {
  const film = { ...data, year: getYear(data) };
  refs.imgDetailsWrapper.insertAdjacentHTML(
    'beforeend',
    templatesDetailsImg(film),
  );
  refs.infoDetailsBox.insertAdjacentHTML(
    'beforeend',
    templatesDetailsFilm(film),
  );
};

export { showDetails };

const film = {
  adult: false,
  backdrop_path: '/t4FHFL6hckU9vohbqO2k7rYGWhF.jpg',
  belongs_to_collection: null,
  budget: 1200000,
  genres: Array(2),
  0: { id: 80, name: 'Crime' },
  1: { id: 53, name: 'Thriller' },
  length: 2,
  __proto__: Array(0),
  homepage: '',
  id: 500,
  imdb_id: 'tt0105236',
  original_language: 'en',
  original_title: 'Reservoir Dogs',
  overview:
    'A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.',
  popularity: 27.31,
  poster_path: '/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg',
  release_date: '1992-09-02',
  revenue: 2859750,
  runtime: 99,
  status: 'Released',
  tagline: 'Every dog has his day.',
  title: 'Reservoir Dogs',
  video: false,
  vote_average: 8.2,
  vote_count: 9497,
};
