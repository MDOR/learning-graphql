function quoteOfTheDay() {
  return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
};

function random() {
  return Math.random();
};

function rollThreeDice() {
  return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
};

export default {
  quoteOfTheDay,
  random,
  rollThreeDice
};
