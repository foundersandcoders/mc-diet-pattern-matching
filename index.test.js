const test = require('tape');
const { greet, hummusReview, cat, defaults } = require('./index');

const greetFixture1 = {
  hello: 'hello',
  there: { there: 'there', pal: ['nope', 'nope', 'pal'] },
};

const greetFixture2 = {
  hello: 'a',
  there: { there: 'b', pal: ['nope', 'nope', 'c'] },
};

test('hello there pal / 1 2 3', ({ end, equal }) => {
  equal(greet(greetFixture1), 'hello there pal', 'Greeting destructured! Yay!');
  equal(greet(greetFixture2), 'a b c', 'Greet still works with other values.');
  end();
});

const hummusFixture1 = {
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

const hummusFixture2 = {
  level1: {
    level2: {
      is: [null, undefined, false, 0, '', 'chickpeas'],
      level3: {
        level3andABit: {
          funkshun: (a, b) => a + b,
        },
        level4: {
          mus: 'yum',
        },
      },
      hu: 'my',
    },
  },
  is: 'forever',
};

test('hummus reviewed / chickpeas enjoyStill worksed', ({ end, equal }) => {
  equal(hummusReview(hummusFixture1), 'hummus is life', 'Omg it worked!');
  equal(hummusReview(hummusFixture2), 'yummy chickpeas forever', 'Still works');
  end();
});

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

const catArr2 = [
  'the',
  {
    a: 'clamber',
    on: [
      null,
      'gone',
      {
        nothing: ['cat'],
      },
      'is',
      [[[['nope'], ['bad']]]],
    ],
  },
];

test('cat mentioned / cat removed', ({ end, equal }) => {
  equal(cat(catArr), "there's a cat on my balcony", 'cat on balcony');
  equal(cat(catArr2), 'the bad clamber cat is gone', 'cat is gone');
  end();
});

const defaultArr = [
  'one',
  undefined,
  undefined,
  'four',
  undefined,
  'six',
  { seven: { no: undefined } },
];

const defaultArr2 = [
  'seven',
  'six',
  'five',
  'four',
  'three',
  'two',
  { seven: { no: 'one' } },
];

test('count with defaults', ({ end, equal }) => {
  equal(defaults(defaultArr), 'one two three four five six seven', 'it counts');
  equal(defaults(defaultArr2), 'seven six five four three two one', 'rewind');
  end();
});
