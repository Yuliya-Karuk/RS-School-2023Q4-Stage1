const hardTemplates = {
  squirrel: [
    [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  ],
  cat: [
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  ],
  deer: [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  ],
  lion: [
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  ],
  penguin: [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  ],
  mouse: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

export default hardTemplates;