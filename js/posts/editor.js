const uploadPhotos = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');

uploadPhotos.addEventListener('change', (evt) => {
  imageUploadModal.classList.remove('hidden');

  const scrollOff = document.querySelector('body');
  scrollOff.classList.add('modal-open');
});

const buttonClose = imageUploadModal.querySelector('#upload-cancel');

buttonClose.addEventListener('click', function () {
  imageUploadModal.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    imageUploadModal.classList.add('hidden');
  }
});
