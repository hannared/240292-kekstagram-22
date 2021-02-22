import generatePosts from './data.js';
import showPreview from './preview.js';

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

document.querySelector('.pictures').addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    const image = images.find(
      (element) => `image${element.id}` == pictureElement.id,
    );
    showPreview(image);

    scrollOff.classList.add('modal-open');
  }
});
