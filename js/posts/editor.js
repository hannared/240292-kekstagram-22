import resetEffects from './effects.js';

const uploadPhotos = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');

uploadPhotos.addEventListener('change', () => {
  imageUploadModal.classList.remove('hidden');
  resetEditor();
  const scrollOff = document.querySelector('body');
  scrollOff.classList.add('modal-open');
});

const closeModal = () => {
  imageUploadModal.classList.add('hidden');
  uploadPhotos.value = '';
  resetEffects();
};
const buttonClose = imageUploadModal.querySelector('#upload-cancel');

buttonClose.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

const buttonPlus = imageUploadModal.querySelector('.scale__control--bigger');
const buttonMinus = imageUploadModal.querySelector('.scale__control--smaller');
const scaleValue = imageUploadModal.querySelector('.scale__control--value');
const imagePreview = imageUploadModal.querySelector('.img-upload__preview img');

const resetEditor = () => {
  imagePreview.style = 'transform: scale(1.0)';
  scaleValue.value = '100%';
};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value) + 25;

  if (scale >= 100) {
    scale = 100;
  }

  scaleValue.value = scale + '%';

  scale = scale / 100;
  imagePreview.style = `transform: scale(${scale})`;
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value) - 25;

  if (scale <= 25) {
    scale = 25;
  }

  scaleValue.value = scale + '%';

  scale = scale / 100;
  imagePreview.style = `transform: scale(${scale})`;
});
