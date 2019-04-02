export const generateState = () => {
  console.log("generate state");
  return {
    turn: 0,
    ap: 1,
    items: generateItems(),
    selected: undefined,
    winner: undefined,
  };
};

const generateItems = (size = 10) => {
  const items = [
    {id: 0, hp: 5, type: 'x', playerId: 'human', ap: 1},
    {id: 1, hp: 5, type: 'o', playerId: 'ai', ap: 1},
    {type: 'tree'},
    {type: 'tree'},
    {type: 'tree'},
    {type: 'tree'},
    {type: 'tree'},
    {type: 'tree'},
    {type: 'rock'},
    {type: 'rock'},
    {type: 'rock'},
    {type: 'water'},
    {type: 'water'},
    {type: 'water'},
  ];
  return generatePosition(size, items);
};

const generatePosition= (size, items) => {
  const points = generateRandomMatrix(size);
  return items.map((item) => ({...item, ...points.shift()}));
};

const generateRandomMatrix = (size) => {
  const array = Array.from(Array(size).keys());
  const matrix = array.map((x) => {
    return array.map((y) => {
      return {x, y};
    })
  }).flat();
  shuffleArray(matrix);
  return matrix;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};