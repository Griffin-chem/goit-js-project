'use strick';
import templateButton from './templates/form.hbs';
const filmDetalisPage = {
	// из DOM достукивается до нужных кнопок участник 3
	//  и вешает функции toggleToQueue и toggleToWatched
	//  слушателями на страницу деталей и удаляет там где не нужно.

	//elementForm - массив элементов для работы
	elementForm: {},

	options: {
		queue: {
			film: 'filmsQueue', // имя коробки c элементами icon and button,  name in localStorage
			delete: 'Delete from queue', // change text
			add: 'Add to queue', //start text
			icon: 'fas', //не низменное в иконке
			iconNot: 'fa-video', // стартовая иконка
			iconYes: 'fa-film' //на то что должна меняться
		},
		watched: {
			film: 'filmsWatched', // имя коробки c элементами icon and button,name in localStorage
			delete: 'Delete from watched', // change text
			add: 'Add to watched', //start text
			icon: 'fa-calendar-plus', //не низменное в иконке
			iconNot: 'fas', // стартовая иконка
			iconYes: 'far' //на то что должна меняться
		}
	},
	//addFormInElem - прорисовывает на страницу разметку html и записывает нужные элементы из формы
	addFormInElem(elem, where = 'beforeend') {
		const tag = document.querySelector(elem);
		if (elem === undefined) {
			document.querySelector('body').insertAdjacentHTML(where, templateButton(this.options));
			this.refs(elem);
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
			boxFilmsQueue: elem.querySelector(`button[data-name="${queue.film}"]`),
			boxFilmsWatched: elem.querySelector(`button[data-name="${watched.film}"]`),
			buttonQueue: elem.querySelector('button[data-name="button_Queue"]'),
			buttonWatched: elem.querySelector('button[data-name="button_Watched"]'),
			iconQueue: elem.querySelector('i[data-name="icon-Queue"]'),
			iconWatched: elem.querySelector('i[data-name="icon-Watched"]')
		};
	},
	//monitorButtonStatusText - следит за кнопками и изменяет  их данные
	monitorButtonStatusText(event) {
		this.elementForm.buttonQueue.addEventListener('click', (e) => this.elemEvent(e, this.options));
		this.elementForm.buttonWatched.addEventListener('click', (e) => this.elemEvent(e, this.options));
	},

	toggleToQueue(item) {
		this.elementForm.buttonQueue.addEventListener('click', (e) => this.elemEvent(e, this.options));
		// пишем функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра),
		//  которая создает переменную массива в очереди,
		//   читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную,
		//    ! также функция вплотную работает с глобальной переменной selectFilm,
		//    и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную,
		//    потом эта функция кладет нашу переменную в local storage,
		// запускает в конце себя функцию monitorButtonStatusText;
	},
	toggleToWatched(item) {
		this.elementForm.buttonWatched.addEventListener('click', (e) => this.elemEvent(e, this.options));
		// пишем функцию toggleToWatched (будет добавлять или удалять фильмы из просмотренных),
		//  суть ее работы один в один как toggleToQueue только работает с local storage по ключу filmsWatched.
	},
	showDetails(elem, selectFilm) {
		//+ пишем функцию showDetails которая принимает параметром selectFilm (глобальная переменная - объект,
		// +  которая создана в задаче номер три) и рендерит всю разметку согласно макета,
		//+   в этой функции запускается функция monitorButtonStatusText.

		this.addFormInElem(elem);
		this.monitorButtonStatusText();
	},
	// elemEvent -Функция  меняющая и изменяющая иконку и надпись на кнопках
	elemEvent(e, { queue, watched }) {
		e.preventDefault();
		e.stopPropagation();
		const elem = e.target;
		let remember = {};
		switch (elem.innerText) {
			case watched.delete:
				this.elementForm.iconWatched.classList.replace(watched.iconYes, watched.iconNot);
				this.addLocalStorage(elem, watched.film, watched.add, watched.iconNot, false);
				return;
			case watched.add:
				this.elementForm.iconWatched.classList.replace(watched.iconNot, watched.iconYes);
				this.addLocalStorage(elem, watched.film, watched.delete, watched.iconYes, true);
				return;
			case queue.add:
				this.elementForm.iconQueue.classList.replace(queue.iconNot, queue.iconYes);
				this.addLocalStorage(elem, queue.film, queue.delete, queue.iconYes, true);
				return;
			case queue.delete:
				this.elementForm.iconQueue.classList.replace(queue.iconYes, queue.iconNot);
				this.addLocalStorage(elem, queue.film, queue.add, queue.iconNot, false);
				return;
			default:
				localStorage.clear();
				console.warn("don't found  LocalStorage ");
				break;
		}
	},
	// addLocalStorage - записывает значения в локальную историю
	addLocalStorage(elem, film, change, icon, bool) {
		elem.innerText = change;
		let remember = {
			checkInput: bool,
			textContext: change,
			iconClass: icon
		};
		try {
			localStorage.setItem(film, JSON.stringify(remember));
		} catch (err) {
			console.warn('Не получилось записать в localStorage', err);
		}
	}
};

// При желаний можно всё это изменить
filmDetalisPage.options = {
	queue: {
		film: 'filmsQueue', // имя коробки c элементами icon and button,  name in localStorage
		delete: 'Delete from queue', // change text
		add: 'Add to queue', //start text
		icon: 'fas', //не низменное в иконке
		iconNot: 'fa-video', // стартовая иконка
		iconYes: 'fa-film' //на то что должна меняться
	},
	watched: {
		film: 'filmsWatched', // имя коробки c элементами icon and button,name in localStorage
		delete: 'Delete from watched', // change text
		add: 'Add to watched', //start text
		icon: 'fa-calendar-plus', //не низменное в иконке
		iconNot: 'fas', // стартовая иконка
		iconYes: 'far' //на то что должна меняться
	}
};

filmDetalisPage.showDetails('.details-page');

export default {
	filmDetalisPage
};
