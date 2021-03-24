import resetEffects from './effects.js';

const uploadPhotos = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const buttonClose = imageUploadModal.querySelector('#upload-cancel');
const buttonPlus = imageUploadModal.querySelector('.scale__control--bigger');
const buttonMinus = imageUploadModal.querySelector('.scale__control--smaller');
const scaleValue = imageUploadModal.querySelector('.scale__control--value');
const imagePreview = imageUploadModal.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MAX_SCALE_VALUE = 100;
const PERCENTS_CONVERTION = 100;

const openModal = () => {
  const scrollOff = document.querySelector('body');

  imageUploadModal.classList.remove('hidden');
  resetEditor();
  resetEffects();
  scrollOff.classList.add('modal-open');
};

const onCloseModalClick = () => {
  imageUploadModal.classList.add('hidden');
  uploadPhotos.value = '';
};

uploadPhotos.addEventListener('change', () => {
  openModal();
});

buttonClose.addEventListener('click', onCloseModalClick);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    onCloseModalClick();
  }
});

const resetEditor = () => {
  imagePreview.style = 'transform: scale(1.0)';
  scaleValue.value = '100%';
};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value) + SCALE_STEP;

  if (scale >= MAX_SCALE_VALUE) {
    scale = MAX_SCALE_VALUE;
  }

  scaleValue.value = scale + '%';

  scale = scale / PERCENTS_CONVERTION;
  imagePreview.style.transform = `scale(${scale})`;
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value) - SCALE_STEP;

  if (scale <= SCALE_STEP) {
    scale = SCALE_STEP;
  }

  scaleValue.value = scale + '%';

  scale = scale / PERCENTS_CONVERTION;
  imagePreview.style.transform = `scale(${scale})`;
});

export { openModal, onCloseModalClick };
