import generatePosts from './data.js';
import preview from './preview.js';

const images = generatePosts();

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;

const picturesFragment = document.createDocumentFragment();

const scrollOff = document.querySelector('body');

images.forEach(({ id, url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('a').id = `image${id}`;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent =
    comments.length;
  picturesFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(picturesFragment);

images.forEach((image) => {
  const imageElement = document.querySelector(`#image${image.id}`);
  imageElement.addEventListener('click', () => {
    preview(image);
    scrollOff.classList.add('modal-open');
  });
});
