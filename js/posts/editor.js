import resetEffects from './effects.js';

const uploadPhotos = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');

uploadPhotos.addEventListener('change', (evt) => {
  imageUploadModal.classList.remove('hidden');

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

imagePreview.style = 'transform: scale(1.0)';
scaleValue.value = '100%';

buttonPlus.addEventListener('click', () => {
  scaleValue.value = parseInt(scaleValue.value) + 25;

  if (scaleValue.value >= 100) {
    scaleValue.value = 100;
  }

  const scale = scaleValue.value / 100;
  imagePreview.style = `transform: scale(${scale})`;

  scaleValue.value += '%';
});

buttonMinus.addEventListener('click', () => {
  scaleValue.value = parseInt(scaleValue.value) - 25;

  if (scaleValue.value <= 25) {
    scaleValue.value = 25;
  }

  const scale = scaleValue.value / 100;
  imagePreview.style = `transform: scale(${scale})`;

  scaleValue.value += '%';
});
