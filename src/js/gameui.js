const GameUI = (() => {
  // const VALID_MOVES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const showMessage = (message) => message;// dom element and display message
  // const isValidMove = (move) => VALID_MOVES.includes(move);
  // const getPlayerMove = () => {
  //   const move = null;// listen to dom and return click event, value
  //   return move;
  // };
  // const askPosition = (player) => {
  //   showMessage(`${player} your turn. Choose a position`);
  //   let move = getPlayerMove();
  //   if (!isValidMove(move)) {
  //     const stdInput = true;
  //     while (stdInput) {
  //       showMessage(`${player} Invalid position. Choose unoccupied position on board.`);
  //       move = getPlayerMove();
  //       if (isValidMove(move)) break;
  //     }
  //   }
  //   return move - 1;// position on board
  // };
  const DOMBoard = document.getElementById('mainboard');
  const DOMBoardCells = Array.from(DOMBoard.children);
  const getDOMBoardCells = () => DOMBoardCells;
  const renderDOMBoard = (state) => {
    state.forEach((symbol, position) => {
      let html = '';
      html = `${symbol}`;
      DOMBoardCells[position].innerHTML = html;
    });
  };
  const renderGameOverBoard = (winner, won = false) => {
    const gameOverMessage = won ? `GameOver: ${winner} wins!!!` : 'Game Tie';
    document.getElementById('gameover-status').innerHTML = gameOverMessage;
  };
  return {
    // askPosition,
    // getPlayerMove,
    getDOMBoardCells,
    renderDOMBoard,
    renderGameOverBoard,
  };
})();
export default GameUI;
