import showPreview from './preview.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();
const scrollOff = document.querySelector('body');

const render = (images) => {
  images.forEach(({ id, url, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('a').id = `image${id}`;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent =
      comments.length;
    picturesFragment.appendChild(pictureElement);
  });

  const allPictures = document.querySelectorAll('.picture');
  allPictures.forEach((picture) => {
    picture.remove();
  });
  picturesContainer.appendChild(picturesFragment);

  document.querySelector('.pictures').addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('.picture');

    if (pictureElement) {
      const image = images.find(
        (element) => `image${element.id}` === pictureElement.id,
      );
      showPreview(image);

      scrollOff.classList.add('modal-open');
    }
  });
};

export default render;
