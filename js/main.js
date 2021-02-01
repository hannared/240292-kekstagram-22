//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const r0 = getRandomInt(0, 10);
const r1 = getRandomInt(20, 30);

console.log(r0);
console.log(r1);


function validateLength (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

const a0 = validateLength ('Привет, я строка', 40);
const a1 = validateLength ('Привет, я строка', 5);

console.log(a0);
console.log(a1);
