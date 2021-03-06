const imageUploadModal = document.querySelector('.img-upload__overlay');
const inputHashtag = imageUploadModal.querySelector('.text__hashtags');
const comment = imageUploadModal.querySelector('.text__description');

const validateHashTag = (hashtag) => {
  const regex = /^#\w{1,19}$/;
  const found = hashtag.match(regex);
  return found !== null;
};

const validateHashTags = (str) => {
  if (str.trim().length === 0) {
    return true;
  }
  const hashTags = str.toLowerCase().split(' ');

  if (hashTags.length !== new Set(hashTags).size) {
    inputHashtag.setCustomValidity('Хэштеги должны быть уникальны');
    return false;
  }

  if (hashTags.length > 5) {
    inputHashtag.setCustomValidity('Количество хэштегов не должно превышать 5');
    return false;
  }

  for (let i = 0; i < hashTags.length; i++) {
    const tag = hashTags[i];
    if (!tag.startsWith('#')) {
      inputHashtag.setCustomValidity('Хэштег должен начинаться с символа #');
      return false;
    }

    if (tag.length > 20) {
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