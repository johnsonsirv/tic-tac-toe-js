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
  const renderGameOverBoard = (winner, state, won = 0) => {
    const gameOverMessage = won === 1 ? `Game Over. ${winner.getName()} wins!!!` : 'Game Tie';
    document.getElementById('gameover-status')
      .innerHTML = gameOverMessage;
    document.getElementById('gameover-board')
      .removeAttribute('class');
    document.getElementById('mainboard')
      .setAttribute('class', 'disable-click');
    renderDOMBoard(state);
  };
  return {
    getDOMBoardCells,
    renderDOMBoard,
    renderGameOverBoard,
  };
})();
export default GameUI;
