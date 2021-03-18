const previewPicture = document.querySelector('.big-picture');
const commentsList = previewPicture.querySelector('.social__comments');
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
  previewPicture.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  previewPicture.querySelector('.big-picture__img img').src = url;
  previewPicture.querySelector('.likes-count').textContent = likes;
  previewPicture.querySelector('.comments-count').textContent = comments.length;
  previewPicture.querySelector('.social__caption').textContent = description;

  const commentsListFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, message, name }) => {
    const commentElement = commentsList
      .querySelector('.social__comment')
      .cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
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

  if (remainingComments == 0) {
    commentsLoader.classList.add('hidden');
  }
};

commentsLoader.addEventListener('click', () => {
  showComments(5);
});

export default showPreview;
