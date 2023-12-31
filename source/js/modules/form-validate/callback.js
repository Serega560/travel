
const baseSuccessCallback = (event) => {
  event.preventDefault();
  const path = 'https://echo.htmlacademy.ru/'
  const form = document.querySelector('[data-form="form"]');

  fetch(path, {
    method:'POST',
    body: new FormData(form),
  })
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
