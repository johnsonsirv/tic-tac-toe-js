
const Board = (() => {
  let state = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const countOfElement = { value: 0 };
  const isFull = () => state.length === countOfElement.value;
  const isPositionFree = (position) => typeof state[position] === 'number';
  const updateState = (symbol, position) => {
    state[position] = symbol;
    countOfElement.value += 1;
  };
  const reset = () => {
    state = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    countOfElement.value = 0;
  };
  return {
    state,
    isFull,
    isPositionFree,
    updateState,
    reset,
  };
})();
export default Board;
