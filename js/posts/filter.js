import { images } from './data.js';
import render from './render.js';

const filter = document.querySelector('.img-filters');
const filterDefault = filter.querySelector('#filter-default');
const filterRandom = filter.querySelector('#filter-random');
const filterDiscussed = filter.querySelector('#filter-discussed');

const RERENDER_DELAY = 500;

filterDefault.addEventListener('click', () => {
  window._.debounce(() => render(images), RERENDER_DELAY);

  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterRandom.addEventnListener('click', () => {
  const shuffled = images.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 10);
  window._.debounce(() => render(selected), RERENDER_DELAY);

  filterRandom.classList.add('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});

filterDiscussed.addEventListener('click', () => {
  const sorted = window._.sortBy(images, (image) => {
    return image.comments.length;
  });
  window._.debounce(() => render(window._.reverse(sorted)), RERENDER_DELAY);

  filterDiscussed.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
});
