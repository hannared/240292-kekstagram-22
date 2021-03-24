const previewPicture = document.querySelector('.big-picture');
const commentsList = previewPicture.querySelector('.social__comments');
const commentTemplateElement = commentsList.querySelector('.social__comment');
const commentTemplatePicture = commentTemplateElement.querySelector(
  '.social__picture',
);
const commentTemplateText = commentTemplateElement.querySelector(
  '.social__text',
);
const previewPictureClose = previewPicture.querySelector(
  '.big-picture__cancel',
);
const scrollOff = document.querySelector('body');
const commentsLoader = previewPicture.querySelector('.comments-loader');

const closeModal = () => {
  previewPicture.classList.add('hidden');
  scrollOff.classList.remove('modal-open');
};

previewPictureClose.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

const showPreview = ({ url, likes, comments, description }) => {
  const commentsListFragment = document.createDocumentFragment();

  previewPicture.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  previewPicture.querySelector('.big-picture__img img').src = url;
  previewPicture.querySelector('.likes-count').textContent = likes;
  previewPicture.querySelector('.comments-count').textContent = comments.length;
  previewPicture.querySelector('.social__caption').textContent = description;

  comments.forEach(({ avatar, message, name }) => {
    commentTemplatePicture.src = avatar;
    commentTemplatePicture.alt = name;
    commentTemplateText.textContent = message;

    const commentElement = commentTemplateElement.cloneNode(true);
    commentsListFragment.appendChild(commentElement);
  });

  commentsList.innerHTML = '';
  commentsList.appendChild(commentsListFragment);

  const allComments = document.querySelectorAll('.social__comment');
  allComments.forEach((comment) => {
    comment.classList.add('hidden');
  });

  showComments(5);
};

const showComments = (n) => {
  const shownComments = document.querySelectorAll('.social__comment.hidden');
  const comments = Array.prototype.slice.call(shownComments).slice(0, n);

  comments.forEach((comment) => {
    comment.classList.remove('hidden');
  });

  const remainingComments = document.querySelectorAll('.social__comment.hidden')
    .length;
  document.querySelector('.comments-shown').textContent =
    document.querySelectorAll('.social__comment').length - remainingComments;

  if (remainingComments === 0) {
    commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', () => {
  showComments(5);
});

export default showPreview;
