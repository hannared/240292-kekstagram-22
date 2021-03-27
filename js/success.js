const ALERT_SHOW_TIME = 5000;

const mainContainer = document.querySelector('main');
const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const removeSuccess = () => {
  document.querySelectorAll('.success').forEach((element) => {
    element.remove();
    document.removeEventListener('keydown', onEscKeyDown);
  });
};

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    removeSuccess();
  }
};

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  document.addEventListener('keydown', onEscKeyDown);
  successElement.querySelector('.success__title').textContent = text;
  const successButton = successElement.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    removeSuccess();
  });

  successElement.querySelectorAll('.success').forEach((element) => {
    element.addEventListener('click', () => {
      removeSuccess();
    });
  });

  setTimeout(() => {
    removeSuccess();
  }, ALERT_SHOW_TIME);

  successFragment.appendChild(successElement);
  mainContainer.appendChild(successFragment);
};

export default showSuccess;
