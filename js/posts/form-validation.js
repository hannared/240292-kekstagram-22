const TAG_LENGTH = 20;
const HASH_PATTERN = /^#\w{1,19}$/;
const MAX_HASH_TAGS = 5;

const imageUploadModal = document.querySelector('.img-upload__overlay');
const inputHashtag = imageUploadModal.querySelector('.text__hashtags');
const comment = imageUploadModal.querySelector('.text__description');

const validateHashTag = (hashtag) => {
  const found = hashtag.match(HASH_PATTERN);
  return found !== null;
};

const validateHashTags = (str) => {
  if (str.trim().length === 0) {
    inputHashtag.setCustomValidity('');
    return true;
  }
  const hashTags = str
    .toLowerCase()
    .split(' ')
    .filter((word) => word.length !== 0);

  if (hashTags.length !== new Set(hashTags).size) {
    inputHashtag.setCustomValidity('Хэштеги должны быть уникальны');
    return false;
  }

  if (hashTags.length > MAX_HASH_TAGS) {
    inputHashtag.setCustomValidity('Количество хэштегов не должно превышать 5');
    return false;
  }

  for (let i = 0; i < hashTags.length; i++) {
    const tag = hashTags[i];

    if (!tag.startsWith('#')) {
      inputHashtag.setCustomValidity('Хэштег должен начинаться с символа #');
      return false;
    }

    if (tag.length > TAG_LENGTH) {
      inputHashtag.setCustomValidity('Длина хэштега не должна превышать 20');
      return false;
    }

    if (!validateHashTag(hashTags[i])) {
      inputHashtag.setCustomValidity(
        'Хэштег может состоять только из букв и чисел',
      );
      return false;
    }
  }

  inputHashtag.setCustomValidity('');
  return true;
};

const onKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', onKeyDown);
comment.addEventListener('keydown', onKeyDown);

inputHashtag.addEventListener('input', () => {
  if (!validateHashTags(inputHashtag.value)) {
    inputHashtag.reportValidity();
  }
});
