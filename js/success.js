const mainContainer = document.querySelector('main');
const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const ALERT_SHOW_TIME = 5000;

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;
  const successButton = successElement.querySelector('.success__button');

  const removeSuccess = () => {
    document.querySelectorAll('.success').forEach((el) => {
      el.remove();
    });
  };

  successButton.addEventListener('click', () => {
    removeSuccess();
  });

  successElement.querySelectorAll('.success').forEach((el) => {
    el.addEventListener('click', () => {
      removeSuccess();
    });
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      removeSuccess();
    }
  });

  setTimeout(() => {
    removeSuccess();
  }, ALERT_SHOW_TIME);

  successFragment.appendChild(successElement);
  mainContainer.appendChild(successFragment);
};

export default showSuccess;
