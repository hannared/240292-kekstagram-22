const MIN_RANGE = 0;
const MAX_RANGE = 100;
const PERCENTS_CONVERTION = 100;
const DEFAULT_VALUE = 100;
const STEP = 1;
const PHOBOS_COEFFICIENT = 2;
const HEAT_COEFFICIENT = 3;
const HEAT_COEFFICIENT_CORRECTION = 1;

const imageUploadModal = document.querySelector('.img-upload__overlay');
const imagePreview = imageUploadModal.querySelector('.img-upload__preview img');
const effects = imageUploadModal.querySelectorAll('.effects__radio');
const effectLevel = imageUploadModal.querySelector('.effect-level__slider');
const effectSliderContainer = imageUploadModal.querySelector(
  '.img-upload__effect-level',
);
const effectValue = imageUploadModal.querySelector('.effect-level__value');

let selectedEffect = 'none';

effects.forEach((element) => {
  element.addEventListener('click', (evt) => {
    imagePreview.className = '';
    imagePreview.classList.add('effects__preview--' + evt.target.value);
    selectedEffect = evt.target.value;
    if (selectedEffect === 'none') {
      imagePreview.style.filter = '';
      effectSliderContainer.classList.add('hidden');
    } else {
      effectSliderContainer.classList.remove('hidden');
      effectLevel.noUiSlider.set(DEFAULT_VALUE);
    }
  });
});

window.noUiSlider.create(effectLevel, {
  range: {
    min: MIN_RANGE,
    max: MAX_RANGE,
  },
  start: DEFAULT_VALUE,
  step: STEP,
});

effectLevel.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  effectValue.value = value;

  switch (selectedEffect) {
    case 'chrome':
      imagePreview.style.filter = `grayscale(${value / PERCENTS_CONVERTION})`;
      break;
    case 'sepia':
      imagePreview.style.filter = `sepia(${value / PERCENTS_CONVERTION})`;
      break;
    case 'marvin':
      imagePreview.style.filter = `invert(${Math.floor(value)}%)`;
      break;
    case 'phobos':
      imagePreview.style.filter = `blur(${
        (value * PHOBOS_COEFFICIENT) / PERCENTS_CONVERTION
      }px)`;
      break;
    case 'heat':
      imagePreview.style.filter = `brightness(${
        (value * HEAT_COEFFICIENT) / PERCENTS_CONVERTION +
        HEAT_COEFFICIENT_CORRECTION
      })`;
      break;
  }
});

const resetEffects = () => {
  imagePreview.classList.remove('effects__preview--' + selectedEffect);
  imagePreview.style.filter = '';
  effectSliderContainer.classList.add('hidden');
  selectedEffect = 'none';
  effectLevel.noUiSlider.set(DEFAULT_VALUE);
};

export default resetEffects;
