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
	},

	toggleToQueue(selectFilm) {
		const remember = this.readingLocalStorage(this.options.queue.boxFilm);
		console.dir(remember);
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
		console.dir(remember);
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
				//to do
				this.addLocalStorage(watched.boxFilm, false,  this.toggleToWatched(selectFilm));
				return;
			case watched.add:
				this.elementForm.iconWatched.classList.replace(watched.iconNot, watched.iconYes);
				elem.innerText = watched.delete;
				//to do
				this.addLocalStorage(watched.boxFilm, true,  this.toggleToWatched(selectFilm));
				return;
			case queue.add:
				this.elementForm.iconQueue.classList.replace(queue.iconNot, queue.iconYes);
				elem.innerText = queue.delete;
				//to do
				this.addLocalStorage(queue.boxFilm, true, this.toggleToQueue(selectFilm));
				return;
			case queue.delete:
				this.elementForm.iconQueue.classList.replace(queue.iconYes, queue.iconNot);
				elem.innerText = queue.add;
				//to do
				this.addLocalStorage(queue.boxFilm, false, this.toggleToQueue(selectFilm));
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
			film: {
				checkInput: bool,
				filmName: film
			}
		};

		try {
			//to do
			localStorage.setItem(boxFilm, JSON.stringify(this.UpdateLocalStorage(oldRemember, remember)));
		} catch (err) {
			console.warn('Не получилось записать в localStorage', err);
		}
	},
	//UpdateLocalStorage - обновит localStorage
	UpdateLocalStorage(item, newFilm) {
		return [ ...item, newFilm ];
	}
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

filmDetalisPage.showDetails('.details-page', 'The name film 35');

export default {
	filmDetalisPage
};
