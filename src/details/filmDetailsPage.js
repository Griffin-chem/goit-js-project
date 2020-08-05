export default {
  monitorButtonStatusText(event) {
    // пишем функцию monitorButtonStatusText которая следит за состоянием
    // (значок и текст в кнопке) читает local storage по ключу
    // filmsQueue и filmsWatched и меняет текст и значки в кнопках:
    //  Delete from queue / Add to queue ; Delete from watched / Add to watched.
  },
  toggleToQueue(arguments) {
    // пишем функцию toggleToQueue (будет добавлять или удалять фильмы из очереди просмотра),
    //  которая создает переменную массива в очереди,
    //   читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную,
    //    ! также функция вплотную работает с глобальной переменной selectFilm,
    //    и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную,
    //    потом эта функция кладет нашу переменную в local storage,
    // запускает в конце себя функцию monitorButtonStatusText;
  },
  toggleToWatched(arguments) {
    // пишем функцию toggleToWatched (будет добавлять или удалять фильмы из просмотренных),
    //  суть ее работы один в один как toggleToQueue только работает с local storage по ключу filmsWatched.
  },
  showDetails(arguments) {
    // пишем функцию showDetails которая принимает параметром selectFilm (глобальная переменная - объект,
    //   которая создана в задаче номер три) и рендерит всю разметку согласно макета,
    //   в этой функции запускается функция monitorButtonStatusText.
  },
  // из DOM достукивается до нужных кнопок участник 3
  //  и вешает функции toggleToQueue и toggleToWatched
  //  слушателями на страницу деталей и удаляет там где не нужно.
};
