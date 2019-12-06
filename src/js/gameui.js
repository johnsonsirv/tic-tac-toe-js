const GameUI = (() => {
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
  const removeListenersOnGameover = () => {
    DOMBoardCells.forEach((cell) => cell.removeEventListener('click', () => {}));
  };
  const renderGameOverBoard = (winner, won = false) => {
    const gameOverMessage = won ? `GameOver: ${winner} wins!!!` : 'Game Tie';
    document.getElementById('gameover-status')
      .innerHTML = gameOverMessage;
    document.getElementById('gameover-board')
      .removeAttribute('class');
    removeListenersOnGameover();
  };
  return {
    getDOMBoardCells,
    renderDOMBoard,
    renderGameOverBoard,
  };
})();
export default GameUI;
