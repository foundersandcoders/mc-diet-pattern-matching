const test = require('tape');
const {
  greet,
  hummusReview,
  cat,
  defaults,
  multiplyArray,
  captureJustDinosaurs,
  nestedBirds,
  listEverySingleColour,
} = require('./index');

const addFixture1 = [1, 2];
const addFixture2 = [3, 4];

test('multiplyArray yay', ({ end, equal }) => {
  equal(multiplyArray(addFixture1), 2, 'Multiplied the array, woo!');
  equal(multiplyArray(addFixture2), 12, 'Multiplied the bigger numbers, woo!');
  end();
});

const dinoFixture1 = [
  'Deer',
  'Allosaurus',
  'Dog',
  'Brachiosaurus',
  'Fish',
  'Diplodocus',
];
const dinoFixture2 = ['a', 'b', 'c', 'd', 'e', 'f'];

test('Just the dinosaurs', ({ end, equal }) => {
  equal(
    captureJustDinosaurs(dinoFixture1),
    'Allosaurus Brachiosaurus Diplodocus',
    'We got dinosaurs only'
  );
  equal(captureJustDinosaurs(dinoFixture2), 'b d f', 'Only some letters!');
  end();
});

const birdsFixture = {
  Nest1: {
    chick1: 'tweet',
    chick2: 'tweet',
    chick3: 'tweet',
    chick4: 'cuckoo',
  },
  Nest2: {
    chick1: 'caaaaaaw',
    chick2: 'cuckoo',
    chick3: 'caaaaw',
    chick4: 'caaaaaw',
  },
  Nest3: {
    chick1: 'SQUAAAAAAAA',
    chick2: 'cuckoo',
    chick3: 'SQUAAAAAAAA',
    chick4: 'SQUAAAAAAAA',
  },
};
const boringStringsFixture = {
  Nest1: {
    chick1: '',
    chick2: '',
    chick3: '',
    chick4: 'BLAH',
  },
  Nest2: {
    chick1: '',
    chick2: 'BLAH',
    chick3: '',
    chick4: '',
  },
  Nest3: {
    chick1: '',
    chick2: 'BLAH',
    chick3: '',
    chick4: '',
  },
};
test('Kicked out those cuckoos', ({ end, equal }) => {
  equal(nestedBirds(birdsFixture), 'cuckoo cuckoo cuckoo', 'Get em!');
  equal(nestedBirds(boringStringsFixture), 'BLAH BLAH BLAH', 'Blah!');
  end();
});

const colourFixture = [
  'red',
  undefined,
  undefined,
  'green',
  undefined,
  undefined,
  'violet',
];
const boringNumberFixture = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
];
test('Did some rainbow default stuff', ({ end, equal }) => {
  equal(
    listEverySingleColour(colourFixture),
    'red orange yellow green blue purple violet',
    'Oooo pretty!'
  );
  equal(
    listEverySingleColour(boringNumberFixture),
    'one two three four five six seven',
    'Numbers!'
  );
  end();
});

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
