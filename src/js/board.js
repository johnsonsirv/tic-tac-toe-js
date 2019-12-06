
const Board = (() => {
  let state = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const countOfElement = { value: 0 };
  const isFull = () => state.length === countOfElement.value;
  const isPositionFree = (position) => typeof state[position] === 'number';
  const updateState = (symbol, position) => {
    state[position] = symbol;
    countOfElement.value += 1;
  };
  const reset = () => {
    state = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    countOfElement.value = 0;
  };
  const getFreePositions = () => {
    state.filter((position) => typeof position === 'number').map((position) => position);
  };
  return {
    state,
    isFull,
    isPositionFree,
    updateState,
    reset,
    getFreePositions,
  };
})();
export default Board;
