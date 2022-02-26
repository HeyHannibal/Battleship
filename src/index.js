import { createGame } from "./gameloop.js";
import { dom, restart, clss } from "./DOM";
import { qsel, remove, waitFor, qsela } from "./helpers";

let game;
let body = qsel("body");
let boardOne = qsel("#boardOne");
let boardTwo = qsel("#boardTwo");

window.onload = function () {
  qsel("#boardOne").append(dom.createBoard("boardOne"));
  qsel("#boardTwo").append(dom.createBoard("boardTwo"));
  dom.gameModePrompt();
};

body.addEventListener("click", async (e) => {
  if (e.target.id === "vComputer") {
    boardOne.classList.remove("disabled");

    game = createGame("vComputer");
    remove("#gameModePrompt");
    boardTwo.classList.add("disabled");
    qsel("#shipyard2").classList.add("hidden");
    await waitFor(() => game.boardOne.allShips.length === 5).then(() => {
      boardTwo.classList.remove("disabled");
      game.boardTwo.populateSelf();
      dom.populateBoard(game.log()).playerOneTurn();
    });
  }
  if (e.target.id === "vPlayer") {
    game = createGame("vPlayer");
    vPlayer();
  }
  if (e.target.id === "restart") {
    restart();
  }
});
function displayOneplayer() {
  return dom.populateBoard(game.log(), true).playerOneTurn("vComputer");
}

/// one player
qsel("#boardTwo").addEventListener("click", (e) => {
  if (game.mode === "vComputer") {
    if (e.target.dataset !== undefined) {
      if (game.boardTwo.allShips.length >= 5) {
        let index = Object.values(e.target.dataset)[0].split("");
        game.vComputer(index[0], index[1], displayOneplayer, dom.hasWon);
      }
    }
  }
});

/// two player
async function vPlayer() {
  remove("#gameModePrompt"); //
  boardTwo.classList.add("disabled");
  await waitFor(() => game.boardOne.allShips.length === 5).then(() => {
    boardTwo.classList.remove("disabled");
    boardOne.classList.add("disabled");
    boardOne.classList.add("hidden");
  });
  await waitFor(() => game.boardTwo.allShips.length === 5).then(() => {
    boardTwo.classList.add("hidden");
    boardTwo.classList.add("disabled");
    dom.continueGame("Player one, press button to make your move", "One");
  });
}
body.addEventListener("click", (e) => {
  if (game.mode === "vPlayer" && game.boardTwo.allShips.length === 5) {
    let attackerBoard = qsel(`#board${game.whoseTurn().attacker.name}`);
    let defenderBoard = qsel(`#board${game.whoseTurn().defender.name}`);
    attackerBoard.classList.add("disabled");
    defenderBoard.classList.remove("disabled");
  }
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("continue")) {
    clss("hidden").removeFrom(boardOne, boardTwo);
  }
  if (e.target.id === "continueOne") {
    dom.populateBoard(game.log()).playerOneTurn();
    remove("#continueOne");
  } else if (e.target.id === "continueTwo") {
    dom.populateBoard(game.log()).playerTwoTurn();
    remove("#continueTwo");
  }
});

qsel("#boardTwo").addEventListener("click", (e) => {
  if (game.mode === "vPlayer") {
    vPlay(e, "playerOne");
    domTurn("playerTwo", true);
  }
});

qsel("#boardOne").addEventListener("click", (e) => {
  if (game.mode === "vPlayer") {
    vPlay(e, "playerTwo");
    domTurn("playerOne", false);
  }
});

function vPlay(e, player) {
  if (game.boardTwo.allShips.length < 5) {
    return;
  } else if (e.target.dataset !== undefined) {
    let index = Object.values(e.target.dataset)[0].split("");
    game[player].attack(index[0], index[1]);
    if (game.isOver()) {
      dom.hasWon(game.winner());
    }
  }
}

function domTurn(player, p1Turn) {
  if (!game.isOver()) {
    p1Turn === true
      ? dom.populateBoard(game.log()).playerOneTurn()
      : dom.populateBoard(game.log()).playerTwoTurn();
    setTimeout(() => {
      clss("hidden").addTo(boardOne, boardTwo);
    }, 200);
    dom.continueGame(
      `Player ${game[player].name}, click to continue`,
      `${game[player].name}`
    );
  }
}

///// pick up ship
const shipyard = qsela(".shipContainer");
shipyard.forEach((shipyard) => {
  shipyard.addEventListener("dragstart", (e) => {
    if (e.target.draggable === true) {
      e.target.classList.toggle("hold");
      e.dataTransfer.setData("length", `${e.target.dataset["length"]}`);
      e.dataTransfer.setData("shipID", `${e.target.id}`);
      setTimeout(() => e.target.classList.add("invisible"));
    }
    shipyard.addEventListener("dragend", (e) => {
      if (e.target.draggable === true)
        setTimeout(
          () => e.target.classList.remove("hold", "invisible", "x", "y"),
          50
        );
    });
  });
});

///// place ship
function whichBoard() {
  if (qsel("#boardTwo").classList.contains("disabled")) {
    return "boardOne";
  } else return "boardTwo";
}
function whichPlayer() {
  if (whichBoard() === "boardTwo") {
    return "playerTwo";
  } else return "playerOne";
}

const cellContainer = qsela(".board");
cellContainer.forEach((board) => {
  board.addEventListener("dragenter", (e) => {
    displayPlaceValidity(e);
  });
  board.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault(),
    displayPlaceValidity(e)
  }
  );
  board.addEventListener("dragleave", (e) => defaultColorOnLeave(e));
  board.addEventListener("drop", (e) => dropship(e));
});

function displayPlaceValidity(e) {
  let board = e.target.parentNode.parentNode.id;
  if (e.target.dataset.index !== undefined && board !== undefined) {
    let length = qsel(".ship.hold.invisible").dataset["length"];
    let axis = qsel("#axisBtn").classList[0];
    if (preCheckValidity(e, length)) {
      dom.displayGhostShip(
        e.target.dataset.index,
        length,
        axis,
        board,
        "validPlace"
      );
    } else {
      dom.displayGhostShip(
        e.target.dataset.index,
        length,
        axis,
        board,
        "invalidPlace"
      );
    }
  }
}

function defaultColorOnLeave(e) {
  if (e.target.dataset.index !== undefined) {
    qsela(".cell.place").forEach((e) =>
      e.classList.remove("validPlace", "invalidPlace", "place")
    );
    e.target.classList.add("cell", whichBoard());
  }
}

function preCheckValidity(event, length) {
  let index = Object.values(event.target.dataset)[0].split("");
  let axis = qsel("#axisBtn").classList[0];
  let place = [Number(index[0]), Number(index[1]), length, axis];
  return game[`${whichPlayer()}`].myGameboard.isValidPlace(...place);
}

function dropship(e) {
  defaultColorOnLeave(e) 
  if (e.target.dataset.index !== undefined) {
    e.target.classList.remove("validPlace", "invalidPlace");
    e.target.classList.add("cell", whichBoard());
    let index = Object.values(e.target.dataset)[0].split("");
    let axis = qsel("#axisBtn").classList[0];
    let length = e.dataTransfer.getData("length");
    let ship = qsel(`#${e.dataTransfer.getData("shipID")}`);
    let place = [Number(index[0]), Number(index[1]), length, axis];
    if (game[whichPlayer()].myGameboard.isValidPlace(...place)) {
      game[whichPlayer()].placeShip(...place);
      ship.draggable = false;
      ship.classList.remove("hold", "invisible");
      ship.style.display = "none";
      dom.populateBoard(game.log()).all();
    } else {
      return false;
    }
  }
}

qsel("#axisBtn").addEventListener("click", (e) => {
  e.target.classList.contains("x")
    ? e.target.classList.replace("x", "y")
    : e.target.classList.replace("y", "x");
  qsela(".slide").forEach((item) => {
    if (item.id === e.target.classList[0].toUpperCase()) {
      item.classList.remove("out");
    } else item.classList.add("out");
  });
});

// qsel("#extreminatus").addEventListener("click", (e) => {
//   for (let a = 0; a <= 9; a++) {
//     for (let b = 0; b <= 9; b++) {
//       setTimeout(() => {
//         game.playerTwo.attack(a, b);
//       }, 200);
//       dom.populateBoard(game.log()).all();
//     }
//   }
// });
