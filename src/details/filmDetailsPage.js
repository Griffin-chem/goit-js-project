'use strick';
const filmDetalisPage = {
  // из DOM достукивается до нужных кнопок участник 3
  //  и вешает функции toggleToQueue и toggleToWatched
  //  слушателями на страницу деталей и удаляет там где не нужно.

  buttonFilmsQueue: document.querySelector('button[data-name="filmsQueue"]'),
  buttonFilmsWatched: document.querySelector(
    'button[data-name="filmsWatched"]',
  ),
  iconQueue: document.querySelector('i[data-name="icon-Queue"]'),
  iconWatched: document.querySelector('i[data-name="icon-Watched"]'),

  options: {
    queue: {
      film: 'filmsQueue',
      delete: 'Delete from queue',
      add: 'Add to queue',
      iconNot: 'fa-video',
      iconYes: 'fa-film',
    },
    watched: {
      film: 'filmsWatched',
      delete: 'Delete from watched',
      add: 'Add to watched',
      iconNot: 'fas',
      iconYes: 'far',
    },
  },

  monitorButtonStatusText(event) {
    this.buttonFilmsQueue.addEventListener('click', e =>
      this.elemEvent(e, this.options),
    );
    this.buttonFilmsWatched.addEventListener('click', e =>
      this.elemEvent(e, this.options),
    );

    //+которая следит за состоянием
    // (значок и текст в кнопке) читает local storage по ключу
    // + filmsQueue и filmsWatched и меняет текст и значки в кнопках:
    // + Delete from queue / Add to queue ; Delete from watched / Add to watched.
  },

  toggleToQueue(item) {
    this.buttonFilmsQueue.addEventListener('click', e => this.elemEvent(e));

    // пишем функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра),
    //  которая создает переменную массива в очереди,
    //   читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную,
    //    ! также функция вплотную работает с глобальной переменной selectFilm,
    //    и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную,
    //    потом эта функция кладет нашу переменную в local storage,
    // запускает в конце себя функцию monitorButtonStatusText;
  },
  toggleToWatched(item) {
    this.buttonFilmsWatched.addEventListener('click', e => this.elemEvent(e));
    // пишем функцию toggleToWatched (будет добавлять или удалять фильмы из просмотренных),
    //  суть ее работы один в один как toggleToQueue только работает с local storage по ключу filmsWatched.
  },
  showDetails(item) {
    // пишем функцию showDetails которая принимает параметром selectFilm (глобальная переменная - объект,
    //   которая создана в задаче номер три) и рендерит всю разметку согласно макета,
    //+   в этой функции запускается функция monitorButtonStatusText.

    this.monitorButtonStatusText();
  },

  elemEvent(e, options) {
    e.preventDefault();
    e.stopPropagation();
    const elem = e.target;
    console.dir(elem);
    let remember = {};
    switch (elem.innerText) {
      case options.watched.delete:
        this.addLocalStorage(
          elem,
          options.watched.film,
          options.watched.add,
          options.watched.iconNot,
          false,
        );
        return;
      case options.watched.add:
        this.addLocalStorage(
          elem,
          options.watched.film,
          options.watched.delete,
          options.watched.iconYes,
          true,
        );
        return;
      case options.queue.add:
        this.addLocalStorage(
          elem,
          options.queue.film,
          options.queue.delete,
          options.queue.iconYes,
          true,
        );
        return;
      case options.queue.delete:
        this.addLocalStorage(
          elem,
          options.queue.film,
          options.queue.add,
          options.queue.iconNot,
          false,
        );
        return;
      default:
        console.warn("don't found  LocalStorage ");
        break;
    }
  },
  addLocalStorage(elem, film, change, icon, bool) {
    elem.innerText = change;
    let remember = {
      checkInput: bool,
      textContext: change,
      iconClass: icon,
    };
    localStorage.setItem(film, JSON.stringify(remember));
  },
};

filmDetalisPage.showDetails();

export default {
  filmDetalisPage,
};
