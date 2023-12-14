const container = document.querySelector('.player');
const poster = document.querySelector('[data-poster-player]');
const button = document.querySelector('[data-button-player]');


const createVideo = () => {
  const iframeElement = document.createElement('iframe');
  iframeElement.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframeElement.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframeElement.setAttribute('frameborder', '0');
  iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframeElement.setAttribute('allowfullscreen', '');
  container.append(iframeElement);
  return iframeElement;
};

export const initVideo = () => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    poster.style.display = 'none';
    button.style.display = 'none';
    createVideo();
  });
}
