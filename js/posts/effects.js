const imageUploadModal = document.querySelector('.img-upload__overlay');
const effectOriginal = imageUploadModal.querySelector('#effect-none');
const effectChrome = imageUploadModal.querySelector('#effect-chrome');
const effectSepia = imageUploadModal.querySelector('#effect-sepia');
const effectMarvin = imageUploadModal.querySelector('#effect-marvin');
const effectPhobos = imageUploadModal.querySelector('#effect-phobos');
const effectHeat = imageUploadModal.querySelector('#effect-heat');
const imagePreview = imageUploadModal.querySelector('.img-upload__preview img');
const effects = imageUploadModal.querySelectorAll('.effects__radio');

effects.forEach((element) => {
  element.addEventListener('click', (evt) => {
    imagePreview.className = '';
    imagePreview.classList.add('effects__preview--' + evt.target.value);
  });
});
