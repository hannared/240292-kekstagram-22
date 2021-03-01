const imageUploadModal = document.querySelector('.img-upload__overlay');
const imagePreview = imageUploadModal.querySelector('.img-upload__preview img');
const effects = imageUploadModal.querySelectorAll('.effects__radio');
const effectLevel = imageUploadModal.querySelector('.img-upload__effect-level');

let selectedEffect = 'none';
effectLevel.classList.add('hidden');

effects.forEach((element) => {
  element.addEventListener('click', (evt) => {
    imagePreview.className = '';
    imagePreview.classList.add('effects__preview--' + evt.target.value);
    selectedEffect = evt.target.value;
    if (selectedEffect === 'none') {
      imagePreview.style = '';
      effectLevel.classList.add('hidden');
    } else {
      effectLevel.classList.remove('hidden');
      effectLevel.noUiSlider.set(100);
    }
  });
});

window.noUiSlider.create(effectLevel, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
});

effectLevel.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];

  switch (selectedEffect) {
    case 'chrome':
      imagePreview.style = `filter: grayscale(${value / 100})`;
      break;
    case 'sepia':
      imagePreview.style = `filter: sepia(${value / 100})`;
      break;
    case 'marvin':
      imagePreview.style = `filter: invert(${Math.floor(value)}%)`;
      break;
    case 'phobos':
      imagePreview.style = `filter: blur(${(value * 3) / 100}px)`;
      break;
    case 'heat':
      imagePreview.style = `filter: brightness(${(value * 2) / 100 + 1})`;
      break;
  }
});

const resetEffects = () => {
  imagePreview.classList.remove('effects__preview--' + selectedEffect);
  imagePreview.style = '';
  effectLevel.classList.add('hidden');
  selectedEffect = 'none';
  effectLevel.noUiSlider.set(100);
};

export default resetEffects;
