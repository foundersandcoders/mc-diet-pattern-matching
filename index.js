const greetObj = {
  hello: 'hello',
  there: { there: 'there', pal: ['nope', 'nope', 'pal'] },
};

const greet = (/* Only edit within the brackets to fix the function! */) => {
  console.log(`${hello} ${there} ${pal}`);
  return `${hello} ${there} ${pal}`;
}; // 'hello there pal'

const hummusReviewObj = {
  level1: {
    level2: {
      is: [null, undefined, false, 0, '', 'is'],
      level3: {
        level3andABit: {
          funkshun: (a, b) => a + b,
        },
        level4: {
          mus: 'hum',
        },
      },
      hu: 'mus',
    },
  },
  is: 'life',
};

const hummusReview = (/* Play with the arguments to review hummus */) => {
  console.log(`${concat(hum, mus)} ${is} ${life}`);
  return `${concat(hum, mus)} ${is} ${life}`;
}; // 'hummus is life'

const catArr = [
  "there's",
  {
    a: 'cat',
    on: [
      null,
      'balcony',
      {
        nothing: ['on'],
      },
      'my',
      [[[['nope'], ['a']]]],
    ],
  },
];

const cat = (/* Cat-based destructuring */) => {
  console.log([one, two, three, four, five, six].reverse().join(' '));
  return [one, two, three, four, five, six].reverse().join(' ');
}; // 'There's a cat on my balcony'

const defaultsArray = [
  'one',
  undefined,
  null,
  'four',
  undefined,
  'six',
  { seven: { no: undefined } },
];

const defaults = (/* Destructuring with defaults! */) => {
  console.log(`${one} ${two} ${three} ${four} ${five} ${six} ${seven}`);
  return `${one} ${two} ${three} ${four} ${five} ${six} ${seven}`;
}; // 'one two three four five six seven'

module.exports = {
  greet,
  hummusReview,
  cat,
  defaults,
};
