import render from './render.js';

const filter = document.querySelector('.img-filters');

let images = [];

export const getImages = () => images;

export const downloadImages = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      return response.json();
    })
    .then((fetchedImages) => {
      images = fetchedImages;

      render(fetchedImages);

      filter.classList.remove('img-filters--inactive');
    });
};
