import render from './render.js';

const filter = document.querySelector('.img-filters');

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    return response.json();
  })
  .then((images) => {
    render(images);
    filter.classList.remove('img-filters--inactive');
  });
