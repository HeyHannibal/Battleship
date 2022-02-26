import "./styles.css";
export { makeShip };

/// Ships ///
let ShipFactory = function (size) {
  let length = size;
  let hull = (function () {
    let arr = [];
    let i = length;
    while (i > 0) {
      arr.push(1);
      i--;
    }
    return arr;
  })();
  let hit = (index) => (hull[index] = 0);
  let isSunk = () => !hull.find((item) => item === 1);
  return { length, hull, hit, isSunk };
};
function makeShip(size) {
  const ship = ShipFactory(size);
  return ship;
}
/// Gameboard ///
let GameboardFactory = function () {
  let makeTable = (function () {
    let board = [];
    let size = 10;
    while (size > 0) {
      board.push([]);
      size--;
    }
    for (let i = 1; i <= 10; i++) {
      board[0].push(null);
    }
    for (let i = 1; i <= 10 - 1; i++) {
      if (i >= 1) board[i].push(null);
    }
    let gameboard = board;
    for (let i = 1; i < gameboard[0].length; i++) {
      for (let y = 1; y < gameboard.length; y++) {
        gameboard[i][y] = null;
      }
    }
    return gameboard;
  })();
  let itself = makeTable;

  let allShips = [];
  const isValidPlace = (a, b, size, axis) => {
    let i = 0;
    let dropsite = [];
    while (i < size) {
      try {
        if (axis === "x") {
          if (b + i > 9) dropsite.push("out of border");
          dropsite.push(itself[a][b + i]);
        } else if (axis === "y") {
          dropsite.push(itself[a + i][b]);
        }
      } catch (err) {
        dropsite.push("out of border");
      }
      i++;
    }
    return !dropsite.some((item) => item != null);
  };
  const place = (a, b, size, axis) => {
    let newShip = makeShip(size);
    allShips.push(newShip);
    let i = 0;
    while (i < size) {
      if (axis === "x") {
        itself[a][b + i] = {
          shipID: allShips.length - 1,
          hull: i,
          isHit: false,
        };
      } else {
        itself[a + i][b] = {
          shipID: allShips.length - 1,
          hull: i,
          isHit: false,
        };
      }
      i++;
    }
  };
  const recieveAttack = (a, b) => {
    if (itself[a][b] != null && itself[a][b] != "missed") {
      let shipID = itself[a][b]["shipID"];
      let shipHull = itself[a][b]["hull"];
      allShips[shipID].hit(shipHull);
      itself[a][b].isHit = true;
    } else {
      itself[a][b] = "missed";
    }
  };
  let logBattle = () => {
    let log = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 10; b++) {
        if (itself[a][b] != null) {
          log.push([itself[a][b], `${a}${b}`]);
        }
      }
    }
    return log;
  };
  const isGameOver = () => {
    return !allShips.some((ship) => ship.isSunk() === false);
  };
  let random = (min, max) => {
    return Math.floor(Math.random() * (max - 0 + min) + 0);
  };
  let populateSelf = function () {
    let ships = [2, 3, 3, 4, 5];
    while (ships.length > 0) {
      let axis = ["x", "y"];
      let pick = (item) => {
        let x = random(1, 9);
        let y = random(1, 9);
        let ax = axis[Math.floor(Math.random() * axis.length)];
        if (x + item > 9) x = x - item;
        if (y + item > 9) y = y - item;
        return [y, x, ax];
      };
      ships.forEach((item, index) => {
        let picked = pick(item);
        if (isValidPlace(picked[0], picked[1], item, picked[2])) {
          place(picked[0], picked[1], item, picked[2]);
          ships.splice(index, 1);
        }
      });
    }
  };
  return {
    itself,
    place,
    isValidPlace,
    allShips,
    recieveAttack,
    isGameOver,
    logBattle,
    populateSelf,
  };
};
export function makeBoard() {
  const gameboard = GameboardFactory();
  return gameboard;
}

/// players ///
let Player = function (playerName, boards) {
  let random = () => {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
  };
  const name = playerName;
  const myGameboard = boards[0];
  const theirGameboard = boards[1];
  let moves = 0;
  let getMoves = () => {
    return moves;
  };
  let attack = (a, b) => {
    theirGameboard.recieveAttack(a, b);
    moves++;
  };
  const placeShip = (a, b, size, axis) => {
    myGameboard.place(a, b, size, axis);
  };
  let makeRandomMove = () => {
    let index = [random(), random()];
    let enemyPosition = theirGameboard.itself[index[0]][index[1]];
    if (enemyPosition === null) {
      attack(index[0], index[1]);
    } else if (enemyPosition !== "missed" && enemyPosition.isHit === false) {
      attack(index[0], index[1]);
    } else {
      makeRandomMove();
    }
  };
  let won = () => {
    if (theirGameboard.isGameOver() === true) return name;
  };
  return {
    name,
    placeShip,
    attack,
    makeRandomMove,
    myGameboard,
    theirGameboard,
    getMoves,
    won,
  };
};

export function makePlayer(name, boards) {
  let newPlayer = Player(name, boards);
  return newPlayer;
}
