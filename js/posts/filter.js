import { images } from './data.js';
import render from './render.js';

const filter = document.querySelector('.img-filters');
const filterDefault = filter.querySelector('#filter-default');
const filterRandom = filter.querySelector('#filter-random');
const filterDiscussed = filter.querySelector('#filter-discussed');

filterDefault.addEventListener('click', () => {
  render(images);

  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterRandom.addEventListener('click', () => {
  const shuffled = images.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 10);
  render(selected);

  filterRandom.classList.add('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterDiscussed.addEventListener('click', () => {
  filterDiscussed.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
});
