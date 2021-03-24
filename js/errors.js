const mainContainer = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const ALERT_SHOW_TIME = 5000;

const removeError = () => {
  document.querySelectorAll('.error').forEach((element) => {
    element.remove();
    document.removeEventListener('keydown', onEscKeyDown);
  });
};

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    removeError();
  }
};

const showError = (text) => {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeyDown);

  errorElement.querySelector('.error__title').textContent = text;
  const errorButton = errorElement.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    removeError();
  });

  errorElement.querySelectorAll('.error').forEach((element) => {
    element.addEventListener('click', () => {
      removeError();
    });
  });

  setTimeout(() => {
    removeError();
  }, ALERT_SHOW_TIME);

  errorFragment.appendChild(errorElement);
  mainContainer.appendChild(errorFragment);
};

export default showError;
