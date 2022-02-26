import { makeBoard, makePlayer } from "./factories";

export function createGame(gameMode) {
  let boardOne = makeBoard();
  let boardTwo = makeBoard();
  let playerOne = makePlayer("One", [boardOne, boardTwo]);
  let playerTwo = makePlayer("Two", [boardTwo, boardOne]);
  let boardArr = [boardOne, boardTwo];
  let mode = gameMode
  
  let whoseTurn = () => {
    if (playerOne.getMoves() > playerTwo.getMoves()) {
      return {'attacker': playerTwo , 'defender': playerOne}
    } else {
      return {'attacker': playerOne ,'defender': playerTwo}
    }
  };
  
  let takeTurn = (a, b) => whoseTurn().attack(a, b);

  let isOver = () => {
    return boardArr.some((board) => {
      return board.isGameOver() === true;
    });
  };
  
  let winner = () => {
    if (isOver()) {
      if (playerOne.won() === playerOne.name) return playerOne.won();
      else return playerTwo.won();
    }
  };
  
  let log = () => {
    return { boardOne: boardOne.logBattle(), boardTwo: boardTwo.logBattle() };
  };


  let vComputer = (a, b, displayFunc, displayWinner) => {
    if(isOver()) {
      over(displayWinner)
    }
    playerOne.attack(a, b);
    displayFunc();
    setTimeout(() => {
      playerTwo.makeRandomMove();
      displayFunc();
    }, 450);
  };

  let vPlayer = (a, b, displayFunc, displayWinner) => {
    if(whoseTurn() === playerOne) {
      playerOne.attack(a,b)
    } else {
      playerTwo.attack(a,b)
    }
    displayFunc()
    if(isOver()) {
      over(displayWinner)
    }
  }
  function over(displayFunc) {
    displayFunc(winner())
    boardOne = null;
    boardTwo = null;
    playerOne = null;
    playerTwo = null;

  }
  return {
    playerOne,
    playerTwo,
    boardOne,
    boardTwo,
    whoseTurn,
    takeTurn,
    isOver,
    winner,
    log,
    vComputer,
    vPlayer,
    mode
  };
}
