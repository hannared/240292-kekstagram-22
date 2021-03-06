import { closeModal } from './editor.js';
const uploadForm = document.querySelector('.img-upload__form');

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: formData,
    }).then(() => onSuccess());
  });
};

setUploadFormSubmit(closeModal);
