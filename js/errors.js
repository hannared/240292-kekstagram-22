const mainContainer = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const ALERT_SHOW_TIME = 5000;

const showError = (text) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  const errorButton = errorElement.querySelector('.error__button');

  const removeError = () => {
    document.querySelectorAll('.error').forEach((el) => {
      el.remove();
    });
  };

  errorButton.addEventListener('click', () => {
    removeError();
  });

  errorElement.querySelectorAll('.error').forEach((el) => {
    el.addEventListener('click', () => {
      removeError();
    });
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      removeError();
    }
  });

  setTimeout(() => {
    removeError();
  }, ALERT_SHOW_TIME);

  errorFragment.appendChild(errorElement);
  mainContainer.appendChild(errorFragment);
};

export default showError;
