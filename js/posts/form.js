import { onCloseModalClick } from './editor.js';
import showError from '../errors.js';
import showSuccess from '../success.js';
const uploadForm = document.querySelector('.img-upload__form');

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
          showSuccess('Изображение успешно загружено');
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        onCloseModalClick();
        showError('Ошибка загрузки файла');
      });
  });
};

setUploadFormSubmit(onCloseModalClick);
