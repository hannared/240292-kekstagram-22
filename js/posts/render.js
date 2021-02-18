import generatePosts from './data.js';

const images = generatePosts();

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;

const picturesFragment = document.createDocumentFragment();

images.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent =
    comments.length;
  picturesFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(picturesFragment);
