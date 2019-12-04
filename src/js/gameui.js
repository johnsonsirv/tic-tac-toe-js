const GameUI = (() => {
  const VALID_MOVES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const showMessage = (message) => message;// dom element and display message
  const isValidMove = (move) => VALID_MOVES.includes(move);
  const getPlayerMove = () => {
    const move = null;// listen to dom and return click event, value
    return move;
  };
  const askPosition = (player) => {
    showMessage(`${player} your turn. Choose a position`);
    let move = getPlayerMove();
    if (!isValidMove(move)) {
      const stdInput = true;
      while (stdInput) {
        showMessage(`${player} Invalid position. Choose unoccupied position on board.`);
        move = getPlayerMove();
        if (isValidMove(move)) break;
      }
    }
    return move - 1;// position on board
  };

  return {
    askPosition,
    getPlayerMove,
  };
})();
export default GameUI;
