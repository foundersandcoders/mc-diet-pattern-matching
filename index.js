// Here is an example of the data you need to destructure
// const simpleArray = [1, 2];
//
const multiplyArray = (/* Only edit between these perens */) => {
  console.log(a * b);
  return a * b;
};

// Here is your data type. Only destructure the dinosaurs. No fish.
// const animalObj = [
//   'Deer',
//   'Allosaurus',
//   'Dog',
//   'Brachiosaurus',
//   'Fish',
//   'Diplodocus',
// ];
//
const captureJustDinosaurs = (/* Only edit between these perens */) => {
  const dinoString = `${Allosaurus} ${Brachiosaurus} ${Diplodocus}`;
  console.log(dinoString);
  return dinoString;
};

// This time only destructure the cuckoo chicks and rename them cookoo1, etc.
// const removeTheCuckoo = {
//   Nest1: {
//     chick1: 'tweet',
//     chick2: 'tweet',
//     chick3: 'tweet',
//     chick4: 'cuckoo',
//   },
//   Nest2: {
//     chick1: 'caaaaaaw',
//     chick2: 'cuckoo',
//     chick3: 'caaaaw',
//     chick4: 'caaaaaw',
//   },
//   Nest3: {
//     chick1: 'SQUAAAAAAAA',
//     chick2: 'cuckoo',
//     chick3: 'SQUAAAAAAAA',
//     chick4: 'SQUAAAAAAAA',
//   },
// };
//
const nestedBirds = (/* Only edit between these perens */) => {
  console.log(`${cuckoo1} ${cuckoo2} ${cuckoo3}`);
  return `${cuckoo1} ${cuckoo2} ${cuckoo3}`;
};

// This time we'll need to add default values for the undefined colours.
// const coloursOfTheRainbow = [
//   'red',
//   undefined,
//   undefined,
//   'green',
//   undefined,
//   undefined,
//   'violet',
// ];
//
const listEverySingleColour = (/* Only change this bit :) */) => {
  const cls = `${red} ${orange} ${yellow} ${green} ${blue} ${purple} ${violet}`;
  console.log(cls);
  return cls;
};

// You're on your own from here on out :)
//
//
// const greetObj = {
//   hello: 'hello',
//   there: { there: 'there', pal: ['nope', 'nope', 'pal'] },
// };
//
const greet = (/* Only edit within the brackets to fix the function! */) => {
  console.log(`${hello} ${there} ${pal}`);
  return `${hello} ${there} ${pal}`;
}; // 'hello there pal'

// const hummusReviewObj = {
//   level1: {
//     level2: {
//       is: [null, undefined, false, 0, '', 'is'],
//       level3: {
//         level3andABit: {
//           funkshun: (a, b) => a + b,
//         },
//         level4: {
//           mus: 'hum',
//         },
//       },
//       hu: 'mus',
//     },
//   },
//   is: 'life',
// };
//
const hummusReview = (/* Play with the arguments to review hummus */) => {
  console.log(`${concat(hum, mus)} ${is} ${life}`);
  return `${concat(hum, mus)} ${is} ${life}`;
}; // 'hummus is life'

// const catArr = [
//   "there's",
//   {
//     a: 'cat',
//     on: [
//       null,
//       'balcony',
//       {
//         nothing: ['on'],
//       },
//       'my',
//       [[[['nope'], ['a']]]],
//     ],
//   },
// ];
//
const cat = (/* Cat-based destructuring */) => {
  console.log([one, two, three, four, five, six].reverse().join(' '));
  return [one, two, three, four, five, six].reverse().join(' ');
}; // 'There's a cat on my balcony'

// const defaultsArray = [
//   'one',
//   undefined,
//   null,
//   'four',
//   undefined,
//   'six',
//   { seven: { no: undefined } },
// ];
//
const defaults = (/* Destructuring with defaults! */) => {
  console.log(`${one} ${two} ${three} ${four} ${five} ${six} ${seven}`);
  return `${one} ${two} ${three} ${four} ${five} ${six} ${seven}`;
}; // 'one two three four five six seven'

module.exports = {
  greet,
  hummusReview,
  cat,
  defaults,
  multiplyArray,
  captureJustDinosaurs,
  nestedBirds,
  listEverySingleColour,
};
