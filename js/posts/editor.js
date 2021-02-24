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

buttonPlus.addEventListener('click', () => {
  scaleValue.value = parseInt(scaleValue.value) + 25;

  if (scaleValue.value >= 100) {
    scaleValue.value = 100;
  }
  scaleValue.value += '%';
});

buttonMinus.addEventListener('click', () => {
  scaleValue.value = parseInt(scaleValue.value) - 25;

  if (scaleValue.value <= 0) {
    scaleValue.value = 0;
  }
  scaleValue.value += '%';
});
