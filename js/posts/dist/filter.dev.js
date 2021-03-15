"use strict";

var _render = _interopRequireDefault(require("./render.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filter = document.querySelector('.img-filters');
var filterDefault = filter.querySelector('#filter-default');
var filterRandom = filter.querySelector('#filter-random');
var filterDiscussed = filter.querySelector('#filter-discussed');
filterDefault.addEventListener('click', function (evt) {
  console.log('filterRandom');
  filterDefault.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});
filterRandom.addEventListener('click', function (evt) {
  filterRandom.classList.add('img-filters__button--active');
  filterDefault.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});
filterDiscussed.addEventListener("click", function (evt) {
  filterDiscussed.classList.add('img-filters__button--active');
  filterRandom.classList.remove('img-filters__button--active');
  filterDiscussed.classList.remove('img-filters__button--active');
});