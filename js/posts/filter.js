import { getImages } from './data.js';
import render from './render.js';

const filter = document.querySelector('.img-filters');
const filterDefault = filter.querySelector('#filter-default');
const filterRandom = filter.querySelector('#filter-random');
const filterDiscussed = filter.querySelector('#filter-discussed');

const RERENDER_DELAY = 500;
const ACTIVE_CLASS = 'img-filters__button--active';
const RANDOM_PICTURES = 10;

const debouncedRenderImages = window._.debounce((images) => {
  render(images);
}, RERENDER_DELAY);

filterDefault.addEventListener('click', () => {
  const images = getImages();
  debouncedRenderImages(images);

  filterDefault.classList.add(ACTIVE_CLASS);
  filterRandom.classList.remove(ACTIVE_CLASS);
  filterDiscussed.classList.remove(ACTIVE_CLASS);
});

filterRandom.addEventListener('click', () => {
  const images = getImages();
  const shuffled = images.sort(() => 0.5 - Math.random());

  let selected = shuffled.slice(0, RANDOM_PICTURES);

  debouncedRenderImages(selected);

  filterRandom.classList.add(ACTIVE_CLASS);
  filterDefault.classList.remove(ACTIVE_CLASS);
  filterDiscussed.classList.remove(ACTIVE_CLASS);
});

filterDiscussed.addEventListener('click', () => {
  const images = getImages();
  const sorted = window._.sortBy(images, (image) => {
    return image.comments.length;
  });

  debouncedRenderImages(window._.reverse(sorted));

  filterDiscussed.classList.add(ACTIVE_CLASS);
  filterRandom.classList.remove(ACTIVE_CLASS);
  filterDefault.classList.remove(ACTIVE_CLASS);
});
