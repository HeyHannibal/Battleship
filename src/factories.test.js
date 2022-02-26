import { makeBoard, makeShip, makePlayer } from "./factories.js";
import { createGame } from "./gameloop.js";
// test("Ships", () => {
//   let destroyer = makeShip(5);

//   expect(destroyer.length).toBe(5);
//   expect(destroyer.hull).toEqual([1, 1, 1, 1, 1]);
//   destroyer.hit(1);
//   expect(destroyer.hull).toEqual([1, 0, 1, 1, 1]);
//   expect(destroyer.isSunk()).toBe(false);

//   let tugboat = makeShip(3);
//   expect(tugboat.length).toBe(3);
//   tugboat.hit(1);
//   expect(tugboat.hull).toEqual([1, 0, 1]);
//   tugboat.hit(0);
//   expect(tugboat.hull).toEqual([0, 0, 1]);
//   tugboat.hit(2);
//   expect(tugboat.isSunk()).toBe(true);
// });

// test("gameboard", () => {
//   let gameboard = makeBoard();
//   expect(gameboard.itself).toEqual([
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//   ]);

//   gameboard.place(0, 0, 1, "x");
//   expect(gameboard.itself).toEqual([
//     [{ shipID: 0, hull: 0 },null,null,null,null,null,null,null,null,null,],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//   ]);
//   expect(typeof gameboard.allShips[0]).toBe("object");
//   gameboard.allShips[0].hit(0);
//   expect(gameboard.allShips[0].isSunk()).toBe(true);

//   gameboard.place(5, 2, 2, "x");
//   expect(gameboard.itself).toEqual([
//     [{ shipID: 0, hull: 0 }, null, null, null, null, null, null, null, null, null,],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, { shipID: 1, hull: 0 }, { shipID: 1, hull: 1 }, null, null, null, null, null, null,],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null, null, null],
//   ]);
//   expect(gameboard.allShips.length).toBe(2);
//   gameboard.recieveAttack(5,2)
//   expect(gameboard.allShips[1].hull).toEqual([0,1])
//   gameboard.recieveAttack(0,1)
//   expect(gameboard.itself[0]).toEqual(
//         [{ shipID: 0, hull: 0 }, 'missed', null, null, null, null, null, null, null, null,],
//   )
//   expect(gameboard.isGameOver()).toBe(false)
//   gameboard.recieveAttack(5,3)
//   expect(gameboard.allShips[1].hull).toEqual([0,0])
//   expect(gameboard.isGameOver()).toBe(true)
// });

// test('players', () => {
//         const gameboardOne = makeBoard();
//         const gameboardTwo = makeBoard();
//         const playerOne = makePlayer('me', [gameboardOne, gameboardTwo]);
//         const playerTwo = makePlayer('computer', [gameboardTwo, gameboardOne]);
//         expect(playerOne.name).toBe('me')
//         expect(playerTwo.name).toBe('computer')
//         playerOne.attack(0,0)
//         expect(gameboardTwo.itself[0][0]).toBe('missed')
//         playerTwo.attack(5,5)
//         expect(gameboardOne.itself[5]).toEqual(
//                 [null, null, null, null, null, 'missed', null, null, null, null]
//         )
//         playerTwo.makeRandomMove()
//         let arr = gameboardOne.itself
//         let randomMoved =  arr.some(item => item.some(cell => cell = 'missed') === true)
//         expect(randomMoved).toBe(true)
// })

// test('boards self populate on start', ()=> {
//   let game = createGame()
//   expect(game.boardOne.itself[0][3]).toEqual(
//     { shipID: 0, hull: 0 }
//   )
//   expect(game.boardOne.itself[1][3]).toEqual(
//     { shipID: 0, hull: 1 }
//   )
//   expect(game.boardOne.itself[2][3]).toEqual(
//     { shipID: 0, hull: 2 }
//   )
//   expect(game.boardTwo.itself[1][3]).toEqual(
//     { shipID: 0, hull: 0 }
//   )
//   console.table(game.boardOne.itself)
// })

// test('Let the games begin', ()=> {
//     let game = createGame()
//     expect(typeof game.playerOne).toBe('object')
//     game.playerOne.attack(0,0)
//     expect(game.playerTwo.myGameboard.itself[0]).toEqual(
//       ['missed', null, null, null, null, null, null, null, null, null]
//     );
//     expect(game.boardTwo.itself[0]).toEqual(
//       ['missed', null, null, null, null, null, null, null, null, null]
//     );
//     console.table(game.boardTwo.itself)
//     expect(game.whoseTurn().name).toEqual('Two')
//     game.takeTurn(0,1)
//     expect(game.boardOne.itself[0][1]).toEqual({'hull': 0, 'shipID': 0})
//     expect(game.boardOne.allShips[0].isSunk()).toBe(true)
//     game.takeTurn(1,1)
//     expect(game.boardTwo.itself[1][1]).toEqual({'hull': 0, 'shipID': 0})
//     expect(game.boardOne.allShips[0].isSunk()).toBe(true)
//     expect(game.isOver()).toBe(true)
// })
