import render from './render.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    return response.json();
  })
  .then((images) => {
    render(images);
  });
