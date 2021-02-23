const previewPicture = document.querySelector('.big-picture');
const commentsList = previewPicture.querySelector('.social__comments');
const previewPictureClose = previewPicture.querySelector(
  '.big-picture__cancel',
);
const scrollOff = document.querySelector('body');

previewPictureClose.addEventListener('click', () => {
  previewPicture.classList.add('hidden');
  scrollOff.classList.remove('modal-open');
});

const showPreview = ({ url, likes, comments, description }) => {
  previewPicture.classList.remove('hidden');

  const commentsCount = previewPicture.querySelector('.social__comment-count');
  const commentsLoader = previewPicture.querySelector('.comments-loader');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

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
};

export default showPreview;
