//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 10);
getRandomInt(20, 30);



function validateLength (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

validateLength ('Привет, я строка', 40);
validateLength ('Привет, я строка', 5);

