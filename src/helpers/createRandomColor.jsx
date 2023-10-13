const createRandomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 125) +
    ',' +
    Math.round(Math.random() * 325) +
    ',' +
    Math.round(Math.random() * 425) +
    ',' +
    0.5 +
    ')';

  return color;
};
export default createRandomColor;
