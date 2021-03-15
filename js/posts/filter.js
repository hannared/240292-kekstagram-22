import render from './render.js';

const filter = document.querySelector('.img-filters');
const filterDefault = filter.querySelector('filter-default');
const filterRandom = filter.querySelector('filter-random');
const filterDiscussed = filter.querySelector('filter-discussed');

filterRandom.addEventListener('click', (evt) => {
  window.random(images);
});
