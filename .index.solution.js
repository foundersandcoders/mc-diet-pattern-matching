const greet = ({ hello, there: { there, pal: [, , pal] } }) => {
  console.log(`${hello} ${there} ${pal}`);
  return `${hello} ${there} ${pal}`;
}; // 'hello there pal'

const hummusReview = ({
  level1: {
    level2: {
      is: [, , , , , is],
      hu: mus,
      level3: { level3andABit: { funkshun: concat }, level4: { mus: hum } },
    },
  },
  is: life,
}) => {
  console.log(`${concat(hum, mus)} ${is} ${life}`);
  return `${concat(hum, mus)} ${is} ${life}`;
}; // 'hummus is life'

const cat = (
  [six, { a: four, on: [, one, { nothing: [three] }, two, [[[, [five]]]]] }]
) => {
  console.log([one, two, three, four, five, six].reverse().join(' '));
  return [one, two, three, four, five, six].reverse().join(' ');
}; // 'There's a cat on my balcony'

const defaults = (
  [
    one,
    two = 'two',
    three = 'three',
    four,
    five = 'five',
    six,
    { seven: { no: seven = 'seven' } },
  ]
) => {
  console.log(`${one} ${two} ${three} ${four} ${five} ${six} ${seven}`);
  return `${one} ${two} ${three} ${four} ${five} ${six} ${seven}`;
}; // 'one two three four five six seven'

module.exports = {
  greet,
  hummusReview,
  cat,
  defaults,
};
