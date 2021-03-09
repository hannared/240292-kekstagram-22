import { closeModal } from './editor.js';
import showError from '../errors.js';
const uploadForm = document.querySelector('.img-upload__form');

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/404', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        closeModal();
        showError('Ошибка загрузки файла');
      });
  });
};

setUploadFormSubmit(closeModal);
