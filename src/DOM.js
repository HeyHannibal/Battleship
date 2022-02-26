import {
  textFactory,
  elementFactory,
  divFactory,
  qsel,
  qsela,
  remove,
} from "./helpers";
export { dom, clss };
let dom = (function () {
  let body = qsel("body");

  function createBoard(which) {
    let cellContainer = divFactory("", "cellContainer");
    for (let a = 0; a < 11; a++) {
      for (let b = 0; b < 11; b++) {
        if (a === 0 || b === 0) {
          let ltrs = textFactory("p", "", "", "", "coordLtrs");
          (a === 0)? (ltrs.textContent = String.fromCharCode(97 + b - 1))
                   : (ltrs.textContent = a);
          let divs = divFactory("", "coordDiv", cellContainer).append(ltrs);
        } else {
          divFactory("", `cell ${which}`, cellContainer).setAttribute(
            "data-index",
            `${a - 1}${b - 1}`
          );
        }
      }
    }
    return cellContainer;
  }

  function populateBoard(battleLogs, dontClear) {
    if (dontClear !== true) {
      clearBoard();
    }
    let populate = (board, which, show) => {
      let container = document.querySelector(`#${which}`);
      board.forEach((item) =>
        setTimeout(() => {
          let domCell = container.querySelector(
            `.${which}[data-index='${item[1]}']`
          );
          if (typeof item[0] === "object" && show === true) {
            domCell.style.background = "rgb(175, 167, 184)";
          }
          if (item[0] === "missed") domCell.style.background = "lightgrey";
          if (item[0].isHit === true) domCell.style.background = "crimson";
        }, 10)
      );
    };
    let playerOneTurn = () => {
      populate(battleLogs["boardOne"], Object.keys(battleLogs)[0], true);
      populate(battleLogs["boardTwo"], Object.keys(battleLogs)[1], false);
    };
    let playerTwoTurn = () => {
      populate(battleLogs["boardOne"], Object.keys(battleLogs)[0], false);
      populate(battleLogs["boardTwo"], Object.keys(battleLogs)[1], true);
    };
    let all = () => {
      populate(battleLogs["boardOne"], Object.keys(battleLogs)[0], true);
      populate(battleLogs["boardTwo"], Object.keys(battleLogs)[1], true);
    };
    return {
      playerOneTurn,
      playerTwoTurn,
      all,
    };
  }

  function displayGhostShip(index, length, axis,board, valid) {
    let direction = {'x':index.split('')[1], 'y':index.split('')[0]}
      try {while(length > 0) {
        qsel(`.${board}[data-index="${direction['y']}${direction['x']}"]`).classList.add(valid,'place')
        direction[axis]++;
        length--;
      }
        } catch(err) {
          console.log('ship is too far out')
        }
    }
  
  function clearBoard() {
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach((item) => {
      item.removeAttribute("style");
      item.classList.remove("validPlace", "invalidPlace", "place")
    });
  }

  function gameModePrompt() {
    let background = divFactory("gameModePrompt", "backgroundBlur", qsel("body"));
    textFactory("h1", "Battleship", background, "title");
    let btnbox = divFactory("buttonbox", "", background);
    elementFactory(
      "button",
      btnbox,
      "vComputer",
      "modeBtn",
      "Play against computer"
    );
    elementFactory(
      "button",
      btnbox,
      "vPlayer",
      "modeBtn",
      "Play against other player"
    );
    return background;
  }

  function gameMsgs(text, element, id, remove) {
    if (remove === true) {
      qsel(`#${id}`).remove();
    }
    return textFactory("h1", text, element, id);
  }

  function hasWon(winner) {
    let background = divFactory("gameover", "backgroundBlur", qsel("body"));
    textFactory("h1", `${winner} has won`, background, "winnerMsg");
    elementFactory("button", background, "restart", "", "Another Round");
    return background;
  }

  function showShips() {
    qsela(".ship").forEach((item) => {
      item.draggable = true;
      item.removeAttribute("style");
    });
  }

  function continueGame(mssg, player) {
    return elementFactory(
      "button",
      body,
      `continue${player}`,
      "continue",
      mssg
    );
  }

  return {
    createBoard,
    populateBoard,
    clearBoard,
    gameModePrompt,
    gameMsgs,
    hasWon,
    showShips,
    continueGame,
    displayGhostShip
  };
})();


export function restart() {
  remove("#gameover");
  dom.clearBoard();
  dom.gameModePrompt();
  dom.showShips();
  qsela('.hidden').forEach(item => item.classList.remove('hidden'))
  qsela('.disabled').forEach(item => item.classList.remove('hidden'))
}

let clss = function (clssStr) {
  let addTo = (...elements) =>
    elements.forEach((item) => item.classList.add(clssStr));
  let removeFrom = (...elements) =>
    elements.forEach((item) => item.classList.remove(clssStr));
  return {
    addTo,
    removeFrom,
  };
};
