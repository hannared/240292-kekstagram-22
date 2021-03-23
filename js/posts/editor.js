import resetEffects from './effects.js';

const uploadPhotos = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');

const SCALE_STEP = 25;

const openModal = () => {
  imageUploadModal.classList.remove('hidden');
  resetEditor();
  resetEffects();
  const scrollOff = document.querySelector('body');
  scrollOff.classList.add('modal-open');
};

const onCloseModalClick = () => {
  imageUploadModal.classList.add('hidden');
  uploadPhotos.value = '';
};

uploadPhotos.addEventListener('change', () => {
  openModal();
});

const buttonClose = imageUploadModal.querySelector('#upload-cancel');

buttonClose.addEventListener('click', onCloseModalClick);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    onCloseModalClick();
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
  let scale = parseInt(scaleValue.value) + SCALE_STEP;

  if (scale >= 100) {
    scale = 100;
  }

  scaleValue.value = scale + '%';

  scale = scale / 100;
  imagePreview.style.transform = `scale(${scale})`;
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value) - SCALE_STEP;

  if (scale <= SCALE_STEP) {
    scale = SCALE_STEP;
  }

  scaleValue.value = scale + '%';

  scale = scale / 100;
  imagePreview.style.transform = `scale(${scale})`;
});

export { openModal, onCloseModalClick };
