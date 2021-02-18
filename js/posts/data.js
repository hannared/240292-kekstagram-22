import getRandomInt from '../util.js';

const images = [];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Артем',
  'Аня',
  'Алеся',
  'Катя',
  'Аким',
  'Катя',
  'Света',
  'Слава',
];

const commentsId = [];

const generatePost = (i) => {
  const image = {
    id: i,
    url: `photos/${i}.jpg`,
    description: `Описание фотографии${i}`,
    likes: getRandomInt(15, 200),
    comments: [],
  };
  images.push(image);

  for (let j = 0; j < getRandomInt(1, 5); j++) {
    const messageIndex = getRandomInt(0, messages.length - 1);
    const nameIndex = getRandomInt(0, names.length - 1);

    let id = getRandomInt(1, 2000);
    while (commentsId.includes(id)) {
      id = getRandomInt(1, 2000);
    }
    commentsId.push(id);

    const comment = {
      id: id,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: messages[messageIndex],
      name: names[nameIndex],
    };
    image.comments.push(comment);
  }

  return image;
};

const generatePosts = () => {
  let posts = [];
  for (let i = 1; i < 26; i++) {
    const post = generatePost(i);
    posts.push(post);
  }
  return posts;
};

export default generatePosts;
