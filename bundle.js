/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\nbody {\n  color: rgb(206, 206, 206);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: whitesmoke;\n}\n\n/* gameboards */\n#gameboards {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.cellContainer {\n  width: 44vh;\n  height: 44vh;\n  max-height: 48vw;\n  max-width: 48vw;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  grid-column-gap: 2px;\n  grid-row-gap: 2px;\n  opacity: 1;\n}\n\n#fill {\n  width: 8vw;\n  height: 60vw;\n}\n.board {\n  max-width: 44vh;\n}\n#boardOneContainer {\n  display: flex;\n  flex-direction: column;\n  max-width: 44vh;\n}\n#boardTwoContainer {\n  display: flex;\n  flex-direction: column;\n  max-width: 44vh;\n}\n#boardOne .cell {\n  background: #c8edff;\n}\n#boardTwo .cell {\n  background: #ececec;\n}\n.cell {\n  border-radius: 2px;\n}\n\n#boardOne .cell.boardOne.invalidPlace {\n  background: #d82626;\n}\n#boardOne .cell.boardOne.validPlace {\n  background: #2fc955;\n}\n#boardTwo .cell.boardTwo.invalidPlace {\n  background: #d82626;\n}\n#boardTwo .cell.boardTwo.validPlace {\n  background: #2fc955;\n}\n/* onload promp */\n\n/* disable board */\n.disabled {\n  pointer-events: none;\n}\n\n/* gameboard hide animation */\n.board {\n  transition: opacity 0.5s ease, transform 1s;\n}\n\n#boardOne.board.hidden {\n  opacity: 0;\n  transform: translateX(-1500px);\n}\n\n#boardTwo.board.hidden {\n  opacity: 0;\n  transform: translateX(1500px);\n}\n\n/* coordinates decoration */\n.coordDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.coordLtrs {\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #717c96;\n}\n\n.cellContainer .coordDiv:first-child .coordLtrs {\n  color: transparent;\n}\n\n/* ships */\n.shipContainer {\n  height: 8vh;\n  max-width: 24rem;\n  width: 91%;\n  margin-left: 9%;\n  margin-top: 1rem;\n  display: flex;\n  align-content: space-around;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  border-radius: 5px;\n  background-color: rgb(230, 236, 238);\n  box-shadow: 1px 1px 3px rgb(184, 184, 184);\n}\n\n.ship {\n  margin: 2px;\n  max-height: 2rem;\n  height: 1.5rem;\n  display: flex;\n  background-color: rgb(175, 167, 184);\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px rgb(105, 105, 105);\n  transition: transform 140ms;\n}\n\n#shipyard2 {\n  transition: opacity 0.5s, transform 1s ease;\n}\n#shipyard2.hidden {\n  opacity: 0;\n  transform: translateX(1500px);\n}\n\n.ship.fi {\n  width: 6rem;\n}\n.ship.fo {\n  width: 5rem;\n}\n.ship.thr {\n  width: 4rem;\n}\n.ship.two {\n  width: 3rem;\n}\n.invisible {\n  display: none;\n}\n/* labels */\n.label {\n  width: 87%;\n  height: 4vh;\n  margin-bottom: 1rem;\n  margin-right: auto;\n  margin-left: 9%;\n  padding-left: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 20px 10px 10px 10px;\n  box-shadow: 2px 2px 5px slategray;\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n\n.label.one {\n  background-color: #ff5e93;\n}\n.label.two {\n  background-color: #717c96;\n}\n\n/* buttons */\nbutton {\n  width: 10rem;\n  height: 3rem;\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: #f85b8e;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 3px 3px 10px gray;\n  transition: box-shadow 0.1s, transform 0.1s;\n}\n\nbutton:active {\n  box-shadow: 2px 2px 5px rgb(104, 104, 104);\n  transform: translateY(3px);\n}\n.modeBtn {\n  margin: 10px;\n}\n/* axis button */\n.buttonCont {\n  width: 2.5rem;\n  height: 2.5rem;\n  overflow: hidden;\n  border-radius: 100px;\n  box-shadow: 1px 1px 5px rgb(77, 77, 77);\n  background-color: rgb(56, 56, 56);\n  position: absolute;\n  bottom: 5rem;\n  right: 7rem;\n  transition: bottom 0.4s ease, right 0.4s ease;\n}\n\n#axisBtn {\n  width: 5rem;\n  height: 5rem;\n  border: none;\n  background-color: #32323d;\n  color: #f7f7f7;\n  font-weight: 700;\n  border-radius: 100px;\n  box-shadow: 2px 5px 10px rgba(156, 156, 156, 0.295);\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n}\n\n#axisBtn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.281);\n}\n\n#axisBtn:active {\n  transform: translateY(3px);\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.377);\n}\n.slide {\n  font-size: 4rem;\n  font-weight: 400;\n  color: rgb(235, 64, 115);\n  transition: transform 0.5s ease-in-out;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.slide.out {\n  transform: translateX(150px);\n}\n\n/* messages */\n#title {\n  margin: 0;\n  font-size: 14vw;\n  color: #32323d;\n}\n\n#gameModePrompt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#winnerMsg {\n  color: #32323d;\n  font-size: 8vw;\n}\n\n#continueTwo,\n#continueOne {\n  position: fixed;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  width: fit-content;\n}\n\n/* background  */\n.backgroundBlur {\n  width: 100vw;\n  height: 100vh;\n  backdrop-filter: blur(10px);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (max-width: 950px) {\n  #fill {\n    width: 3vw;\n  }\n  .label {\n    height: 3vh;\n    width: calc(40vw - 13%);\n    font-size: 1rem;\n  }\n}\n@media only screen and (max-width: 900px) {\n  #boardOneContainer {\n    width: 55vw;\n  }\n  .cellContainer {\n    height: 40vw;\n    width: 40vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 36vw;\n    height: 4.5rem;\n  }\n  .label {\n    height: 3vh;\n    width: calc(40vw - 13%);\n    font-size: 1rem;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  #gameboards {\n    flex-direction: column;\n    justify-content: center;\n  }\n  #boardOneContainer {\n    width: 45vw;\n  }\n  .cellContainer {\n    height: 45vw;\n    width: 45vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 45vw;\n    height: 3rem;\n  }\n  .ship {\n    height: 0.8rem;\n  }\n  #axisBtn {\n    font-size: 0.8rem;\n    width: 4rem;\n    height: 4rem;\n    margin-left: 0;\n  }\n  .buttonCont {\n    bottom: 7rem;\n    right: 2.8rem;\n  }\n  .label {\n    height: 3vh;\n    width: calc(45vw - 13%);\n    font-size: 1rem;\n  }\n}\n@media only screen and (max-height: 750px) {\n  #boardOneContainer {\n    width: 55vw;\n  }\n  #gameboards {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .cellContainer {\n    height: 55vw;\n    width: 55vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 45vw;\n    height: 2rem;\n  }\n  .ship {\n    height: 0.8rem;\n  }\n  #axisBtn {\n    font-size: 0.8rem;\n    width: 4rem;\n    height: 4rem;\n  }\n  .label {\n    height: 1rem;\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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AAS;EACT,gCAAgC;AAClC;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;;EAEE,eAAe;EACf,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA,gBAAgB;AAChB;EACE,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,WAAW;IACX,uBAAuB;IACvB,eAAe;EACjB;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;IACf,cAAc;EAChB;EACA;IACE,WAAW;IACX,uBAAuB;IACvB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,uBAAuB;EACzB;EACA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;IACf,YAAY;EACd;EACA;IACE,cAAc;EAChB;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,cAAc;EAChB;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,WAAW;IACX,uBAAuB;IACvB,eAAe;EACjB;AACF;AACA;EACE;IACE,WAAW;EACb;EACA;IACE,sBAAsB;IACtB,uBAAuB;EACzB;EACA;IACE,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;IACf,YAAY;EACd;EACA;IACE,cAAc;EAChB;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":["html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  box-sizing: border-box;\n}\nbody {\n  color: rgb(206, 206, 206);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: whitesmoke;\n}\n\n/* gameboards */\n#gameboards {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.cellContainer {\n  width: 44vh;\n  height: 44vh;\n  max-height: 48vw;\n  max-width: 48vw;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  grid-column-gap: 2px;\n  grid-row-gap: 2px;\n  opacity: 1;\n}\n\n#fill {\n  width: 8vw;\n  height: 60vw;\n}\n.board {\n  max-width: 44vh;\n}\n#boardOneContainer {\n  display: flex;\n  flex-direction: column;\n  max-width: 44vh;\n}\n#boardTwoContainer {\n  display: flex;\n  flex-direction: column;\n  max-width: 44vh;\n}\n#boardOne .cell {\n  background: #c8edff;\n}\n#boardTwo .cell {\n  background: #ececec;\n}\n.cell {\n  border-radius: 2px;\n}\n\n#boardOne .cell.boardOne.invalidPlace {\n  background: #d82626;\n}\n#boardOne .cell.boardOne.validPlace {\n  background: #2fc955;\n}\n#boardTwo .cell.boardTwo.invalidPlace {\n  background: #d82626;\n}\n#boardTwo .cell.boardTwo.validPlace {\n  background: #2fc955;\n}\n/* onload promp */\n\n/* disable board */\n.disabled {\n  pointer-events: none;\n}\n\n/* gameboard hide animation */\n.board {\n  transition: opacity 0.5s ease, transform 1s;\n}\n\n#boardOne.board.hidden {\n  opacity: 0;\n  transform: translateX(-1500px);\n}\n\n#boardTwo.board.hidden {\n  opacity: 0;\n  transform: translateX(1500px);\n}\n\n/* coordinates decoration */\n.coordDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.coordLtrs {\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #717c96;\n}\n\n.cellContainer .coordDiv:first-child .coordLtrs {\n  color: transparent;\n}\n\n/* ships */\n.shipContainer {\n  height: 8vh;\n  max-width: 24rem;\n  width: 91%;\n  margin-left: 9%;\n  margin-top: 1rem;\n  display: flex;\n  align-content: space-around;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  border-radius: 5px;\n  background-color: rgb(230, 236, 238);\n  box-shadow: 1px 1px 3px rgb(184, 184, 184);\n}\n\n.ship {\n  margin: 2px;\n  max-height: 2rem;\n  height: 1.5rem;\n  display: flex;\n  background-color: rgb(175, 167, 184);\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px rgb(105, 105, 105);\n  transition: transform 140ms;\n}\n\n#shipyard2 {\n  transition: opacity 0.5s, transform 1s ease;\n}\n#shipyard2.hidden {\n  opacity: 0;\n  transform: translateX(1500px);\n}\n\n.ship.fi {\n  width: 6rem;\n}\n.ship.fo {\n  width: 5rem;\n}\n.ship.thr {\n  width: 4rem;\n}\n.ship.two {\n  width: 3rem;\n}\n.invisible {\n  display: none;\n}\n/* labels */\n.label {\n  width: 87%;\n  height: 4vh;\n  margin-bottom: 1rem;\n  margin-right: auto;\n  margin-left: 9%;\n  padding-left: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 20px 10px 10px 10px;\n  box-shadow: 2px 2px 5px slategray;\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n\n.label.one {\n  background-color: #ff5e93;\n}\n.label.two {\n  background-color: #717c96;\n}\n\n/* buttons */\nbutton {\n  width: 10rem;\n  height: 3rem;\n  border: none;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: #f85b8e;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 3px 3px 10px gray;\n  transition: box-shadow 0.1s, transform 0.1s;\n}\n\nbutton:active {\n  box-shadow: 2px 2px 5px rgb(104, 104, 104);\n  transform: translateY(3px);\n}\n.modeBtn {\n  margin: 10px;\n}\n/* axis button */\n.buttonCont {\n  width: 2.5rem;\n  height: 2.5rem;\n  overflow: hidden;\n  border-radius: 100px;\n  box-shadow: 1px 1px 5px rgb(77, 77, 77);\n  background-color: rgb(56, 56, 56);\n  position: absolute;\n  bottom: 5rem;\n  right: 7rem;\n  transition: bottom 0.4s ease, right 0.4s ease;\n}\n\n#axisBtn {\n  width: 5rem;\n  height: 5rem;\n  border: none;\n  background-color: #32323d;\n  color: #f7f7f7;\n  font-weight: 700;\n  border-radius: 100px;\n  box-shadow: 2px 5px 10px rgba(156, 156, 156, 0.295);\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n}\n\n#axisBtn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.281);\n}\n\n#axisBtn:active {\n  transform: translateY(3px);\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.377);\n}\n.slide {\n  font-size: 4rem;\n  font-weight: 400;\n  color: rgb(235, 64, 115);\n  transition: transform 0.5s ease-in-out;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.slide.out {\n  transform: translateX(150px);\n}\n\n/* messages */\n#title {\n  margin: 0;\n  font-size: 14vw;\n  color: #32323d;\n}\n\n#gameModePrompt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#winnerMsg {\n  color: #32323d;\n  font-size: 8vw;\n}\n\n#continueTwo,\n#continueOne {\n  position: fixed;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  width: fit-content;\n}\n\n/* background  */\n.backgroundBlur {\n  width: 100vw;\n  height: 100vh;\n  backdrop-filter: blur(10px);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (max-width: 950px) {\n  #fill {\n    width: 3vw;\n  }\n  .label {\n    height: 3vh;\n    width: calc(40vw - 13%);\n    font-size: 1rem;\n  }\n}\n@media only screen and (max-width: 900px) {\n  #boardOneContainer {\n    width: 55vw;\n  }\n  .cellContainer {\n    height: 40vw;\n    width: 40vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 36vw;\n    height: 4.5rem;\n  }\n  .label {\n    height: 3vh;\n    width: calc(40vw - 13%);\n    font-size: 1rem;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  #gameboards {\n    flex-direction: column;\n    justify-content: center;\n  }\n  #boardOneContainer {\n    width: 45vw;\n  }\n  .cellContainer {\n    height: 45vw;\n    width: 45vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 45vw;\n    height: 3rem;\n  }\n  .ship {\n    height: 0.8rem;\n  }\n  #axisBtn {\n    font-size: 0.8rem;\n    width: 4rem;\n    height: 4rem;\n    margin-left: 0;\n  }\n  .buttonCont {\n    bottom: 7rem;\n    right: 2.8rem;\n  }\n  .label {\n    height: 3vh;\n    width: calc(45vw - 13%);\n    font-size: 1rem;\n  }\n}\n@media only screen and (max-height: 750px) {\n  #boardOneContainer {\n    width: 55vw;\n  }\n  #gameboards {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .cellContainer {\n    height: 55vw;\n    width: 55vw;\n    max-height: none;\n    max-width: none;\n  }\n  #fill {\n    height: 3vw;\n  }\n  .shipContainer {\n    max-width: 45vw;\n    height: 2rem;\n  }\n  .ship {\n    height: 0.8rem;\n  }\n  #axisBtn {\n    font-size: 0.8rem;\n    width: 4rem;\n    height: 4rem;\n  }\n  .label {\n    height: 1rem;\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ dom),
/* harmony export */   "clss": () => (/* binding */ clss),
/* harmony export */   "restart": () => (/* binding */ restart)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


let dom = (function () {
  let body = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)("body");

  function createBoard(which) {
    let cellContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("", "cellContainer");
    for (let a = 0; a < 11; a++) {
      for (let b = 0; b < 11; b++) {
        if (a === 0 || b === 0) {
          let ltrs = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)("p", "", "", "", "coordLtrs");
          (a === 0)? (ltrs.textContent = String.fromCharCode(97 + b - 1))
                   : (ltrs.textContent = a);
          let divs = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("", "coordDiv", cellContainer).append(ltrs);
        } else {
          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("", `cell ${which}`, cellContainer).setAttribute(
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)(`.${board}[data-index="${direction['y']}${direction['x']}"]`).classList.add(valid,'place')
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
    let background = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("gameModePrompt", "backgroundBlur", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)("body"));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)("h1", "Battleship", background, "title");
    let btnbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("buttonbox", "", background);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(
      "button",
      btnbox,
      "vComputer",
      "modeBtn",
      "Play against computer"
    );
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(
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
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)(`#${id}`).remove();
    }
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)("h1", text, element, id);
  }

  function hasWon(winner) {
    let background = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)("gameover", "backgroundBlur", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)("body"));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)("h1", `${winner} has won`, background, "winnerMsg");
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)("button", background, "restart", "", "Another Round");
    return background;
  }

  function showShips() {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsela)(".ship").forEach((item) => {
      item.draggable = true;
      item.removeAttribute("style");
    });
  }

  function continueGame(mssg, player) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(
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


function restart() {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.remove)("#gameover");
  dom.clearBoard();
  dom.gameModePrompt();
  dom.showShips();
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsela)('.hidden').forEach(item => item.classList.remove('hidden'))
  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsela)('.disabled').forEach(item => item.classList.remove('hidden'))
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


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeShip": () => (/* binding */ makeShip),
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "makePlayer": () => (/* binding */ makePlayer)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



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
function makeBoard() {
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

function makePlayer(name, boards) {
  let newPlayer = Player(name, boards);
  return newPlayer;
}


/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGame": () => (/* binding */ createGame)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");


function createGame(gameMode) {
  let boardOne = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.makeBoard)();
  let boardTwo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.makeBoard)();
  let playerOne = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.makePlayer)("One", [boardOne, boardTwo]);
  let playerTwo = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.makePlayer)("Two", [boardTwo, boardOne]);
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


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementFactory": () => (/* binding */ elementFactory),
/* harmony export */   "textFactory": () => (/* binding */ textFactory),
/* harmony export */   "divFactory": () => (/* binding */ divFactory),
/* harmony export */   "qsel": () => (/* binding */ qsel),
/* harmony export */   "qsela": () => (/* binding */ qsela),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "disable": () => (/* binding */ disable),
/* harmony export */   "waitFor": () => (/* binding */ waitFor)
/* harmony export */ });
function make(type) {
  const element = document.createElement(type);
  function setId(id) {
    if (id !== '' && id !== undefined) element.setAttribute('id', id);
  }
  function setClass(cssClass) {
    if (cssClass !== '' && cssClass !== undefined) element.setAttribute('class', cssClass);
  }
  function addText(textContent) {
    if (textContent !== undefined) element.textContent = textContent;
  }
  function appendElement(appendTo) {
    if (appendTo !== undefined && appendTo != '') appendTo.append(element);
  }
  function setSrc(src) {
    if (src !== undefined) element.src = src;
  }
  const returnElement = () => element;
  return {
    addText, setId, setClass, setSrc, appendElement, returnElement,
  };
}

function elementFactory(type, appendTo, id, cssClass, textContent, src) {
  const element = make(type);
  element.appendElement(appendTo);
  element.addText(textContent);
  element.setId(id);
  element.setClass(cssClass);
  element.setSrc(src);
  return element.returnElement();
}

function textFactory(type, textContent, appendTo, id, cssClass) {
  const text = make(type);
  text.addText(textContent);
  text.appendElement(appendTo);
  text.setId(id);
  text.setClass(cssClass);
  return text.returnElement();
}

function divFactory(id, cssClass, appendTo) {
  const newDiv = make('div');
  newDiv.setId(id);
  newDiv.setClass(cssClass);
  newDiv.appendElement(appendTo);
  return newDiv.returnElement();
}

function qsel(element) {
  return document.querySelector(element);
}
function qsela(element) {
  return document.querySelectorAll(element)
}

function remove(element) {
  qsel(element).remove()
}

function disable(element, dis) {
  if(dis === true) qsel(element).classList.add('disabled')
  else qsel(element).classList.remove('disabled')
}

/// wait till true
let sleep = ms => new Promise(r => setTimeout(r, ms));
async function waitFor(f){
        while(!f()) await sleep(1000);
        return f();
    };
    


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameloop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop.js */ "./src/gameloop.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");




let game;
let body = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("body");
let boardOne = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardOne");
let boardTwo = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardTwo");

window.onload = function () {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardOne").append(_DOM__WEBPACK_IMPORTED_MODULE_1__.dom.createBoard("boardOne"));
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardTwo").append(_DOM__WEBPACK_IMPORTED_MODULE_1__.dom.createBoard("boardTwo"));
  _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.gameModePrompt();
};

body.addEventListener("click", async (e) => {
  if (e.target.id === "vComputer") {
    boardOne.classList.remove("disabled");

    game = (0,_gameloop_js__WEBPACK_IMPORTED_MODULE_0__.createGame)("vComputer");
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.remove)("#gameModePrompt");
    boardTwo.classList.add("disabled");
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#shipyard2").classList.add("hidden");
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.waitFor)(() => game.boardOne.allShips.length === 5).then(() => {
      boardTwo.classList.remove("disabled");
      game.boardTwo.populateSelf();
      _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).playerOneTurn();
    });
  }
  if (e.target.id === "vPlayer") {
    game = (0,_gameloop_js__WEBPACK_IMPORTED_MODULE_0__.createGame)("vPlayer");
    vPlayer();
  }
  if (e.target.id === "restart") {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.restart)();
  }
});
function displayOneplayer() {
  return _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log(), true).playerOneTurn("vComputer");
}

/// one player
(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardTwo").addEventListener("click", (e) => {
  if (game.mode === "vComputer") {
    if (e.target.dataset !== undefined) {
      if (game.boardTwo.allShips.length >= 5) {
        let index = Object.values(e.target.dataset)[0].split("");
        game.vComputer(index[0], index[1], displayOneplayer, _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.hasWon);
      }
    }
  }
});

/// two player
async function vPlayer() {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.remove)("#gameModePrompt"); //
  boardTwo.classList.add("disabled");
  await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.waitFor)(() => game.boardOne.allShips.length === 5).then(() => {
    boardTwo.classList.remove("disabled");
    boardOne.classList.add("disabled");
    boardOne.classList.add("hidden");
  });
  await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.waitFor)(() => game.boardTwo.allShips.length === 5).then(() => {
    boardTwo.classList.add("hidden");
    boardTwo.classList.add("disabled");
    _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.continueGame("Player one, press button to make your move", "One");
  });
}
body.addEventListener("click", (e) => {
  if (game.mode === "vPlayer" && game.boardTwo.allShips.length === 5) {
    let attackerBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)(`#board${game.whoseTurn().attacker.name}`);
    let defenderBoard = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)(`#board${game.whoseTurn().defender.name}`);
    attackerBoard.classList.add("disabled");
    defenderBoard.classList.remove("disabled");
  }
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("continue")) {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clss)("hidden").removeFrom(boardOne, boardTwo);
  }
  if (e.target.id === "continueOne") {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).playerOneTurn();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.remove)("#continueOne");
  } else if (e.target.id === "continueTwo") {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).playerTwoTurn();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.remove)("#continueTwo");
  }
});

(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardTwo").addEventListener("click", (e) => {
  if (game.mode === "vPlayer") {
    vPlay(e, "playerOne");
    domTurn("playerTwo", true);
  }
});

(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardOne").addEventListener("click", (e) => {
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
      _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.hasWon(game.winner());
    }
  }
}

function domTurn(player, p1Turn) {
  if (!game.isOver()) {
    p1Turn === true
      ? _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).playerOneTurn()
      : _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).playerTwoTurn();
    setTimeout(() => {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clss)("hidden").addTo(boardOne, boardTwo);
    }, 200);
    _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.continueGame(
      `Player ${game[player].name}, click to continue`,
      `${game[player].name}`
    );
  }
}

///// pick up ship
const shipyard = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsela)(".shipContainer");
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
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#boardTwo").classList.contains("disabled")) {
    return "boardOne";
  } else return "boardTwo";
}
function whichPlayer() {
  if (whichBoard() === "boardTwo") {
    return "playerTwo";
  } else return "playerOne";
}

const cellContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsela)(".board");
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
    let length = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)(".ship.hold.invisible").dataset["length"];
    let axis = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#axisBtn").classList[0];
    if (preCheckValidity(e, length)) {
      _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.displayGhostShip(
        e.target.dataset.index,
        length,
        axis,
        board,
        "validPlace"
      );
    } else {
      _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.displayGhostShip(
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsela)(".cell.place").forEach((e) =>
      e.classList.remove("validPlace", "invalidPlace", "place")
    );
    e.target.classList.add("cell", whichBoard());
  }
}

function preCheckValidity(event, length) {
  let index = Object.values(event.target.dataset)[0].split("");
  let axis = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#axisBtn").classList[0];
  let place = [Number(index[0]), Number(index[1]), length, axis];
  return game[`${whichPlayer()}`].myGameboard.isValidPlace(...place);
}

function dropship(e) {
  defaultColorOnLeave(e) 
  if (e.target.dataset.index !== undefined) {
    e.target.classList.remove("validPlace", "invalidPlace");
    e.target.classList.add("cell", whichBoard());
    let index = Object.values(e.target.dataset)[0].split("");
    let axis = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#axisBtn").classList[0];
    let length = e.dataTransfer.getData("length");
    let ship = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)(`#${e.dataTransfer.getData("shipID")}`);
    let place = [Number(index[0]), Number(index[1]), length, axis];
    if (game[whichPlayer()].myGameboard.isValidPlace(...place)) {
      game[whichPlayer()].placeShip(...place);
      ship.draggable = false;
      ship.classList.remove("hold", "invisible");
      ship.style.display = "none";
      _DOM__WEBPACK_IMPORTED_MODULE_1__.dom.populateBoard(game.log()).all();
    } else {
      return false;
    }
  }
}

(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsel)("#axisBtn").addEventListener("click", (e) => {
  e.target.classList.contains("x")
    ? e.target.classList.replace("x", "y")
    : e.target.classList.replace("y", "x");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.qsela)(".slide").forEach((item) => {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sc0NBQXNDLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMkJBQTJCLEdBQUcsUUFB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Q0EsTUFBTTtBQUNOLE1BQU0sc0RBQW9CO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsOENBQUk7QUFDakI7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFJO0FBQ25CO0FBQ0EsZUFBZSw4Q0FBSSxLQUFLLGlDQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFLO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC0vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC0vLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGdhbWVib2FyZHMgKi9cXG4jZ2FtZWJvYXJkcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lciB7XFxuICB3aWR0aDogNDR2aDtcXG4gIGhlaWdodDogNDR2aDtcXG4gIG1heC1oZWlnaHQ6IDQ4dnc7XFxuICBtYXgtd2lkdGg6IDQ4dnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMnB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAycHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jZmlsbCB7XFxuICB3aWR0aDogOHZ3O1xcbiAgaGVpZ2h0OiA2MHZ3O1xcbn1cXG4uYm9hcmQge1xcbiAgbWF4LXdpZHRoOiA0NHZoO1xcbn1cXG4jYm9hcmRPbmVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDQ0dmg7XFxufVxcbiNib2FyZFR3b0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDR2aDtcXG59XFxuI2JvYXJkT25lIC5jZWxsIHtcXG4gIGJhY2tncm91bmQ6ICNjOGVkZmY7XFxufVxcbiNib2FyZFR3byAuY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uY2VsbCB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbiNib2FyZE9uZSAuY2VsbC5ib2FyZE9uZS5pbnZhbGlkUGxhY2Uge1xcbiAgYmFja2dyb3VuZDogI2Q4MjYyNjtcXG59XFxuI2JvYXJkT25lIC5jZWxsLmJvYXJkT25lLnZhbGlkUGxhY2Uge1xcbiAgYmFja2dyb3VuZDogIzJmYzk1NTtcXG59XFxuI2JvYXJkVHdvIC5jZWxsLmJvYXJkVHdvLmludmFsaWRQbGFjZSB7XFxuICBiYWNrZ3JvdW5kOiAjZDgyNjI2O1xcbn1cXG4jYm9hcmRUd28gLmNlbGwuYm9hcmRUd28udmFsaWRQbGFjZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmZjOTU1O1xcbn1cXG4vKiBvbmxvYWQgcHJvbXAgKi9cXG5cXG4vKiBkaXNhYmxlIGJvYXJkICovXFxuLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBnYW1lYm9hcmQgaGlkZSBhbmltYXRpb24gKi9cXG4uYm9hcmQge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAxcztcXG59XFxuXFxuI2JvYXJkT25lLmJvYXJkLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAwcHgpO1xcbn1cXG5cXG4jYm9hcmRUd28uYm9hcmQuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwMHB4KTtcXG59XFxuXFxuLyogY29vcmRpbmF0ZXMgZGVjb3JhdGlvbiAqL1xcbi5jb29yZERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29vcmRMdHJzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNzE3Yzk2O1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lciAuY29vcmREaXY6Zmlyc3QtY2hpbGQgLmNvb3JkTHRycyB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIHNoaXBzICovXFxuLnNoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgd2lkdGg6IDkxJTtcXG4gIG1hcmdpbi1sZWZ0OiA5JTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzYsIDIzOCk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcblxcbi5zaGlwIHtcXG4gIG1hcmdpbjogMnB4O1xcbiAgbWF4LWhlaWdodDogMnJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDE2NywgMTg0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYigxMDUsIDEwNSwgMTA1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNDBtcztcXG59XFxuXFxuI3NoaXB5YXJkMiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG4jc2hpcHlhcmQyLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MDBweCk7XFxufVxcblxcbi5zaGlwLmZpIHtcXG4gIHdpZHRoOiA2cmVtO1xcbn1cXG4uc2hpcC5mbyB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnNoaXAudGhyIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uc2hpcC50d28ge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogbGFiZWxzICovXFxuLmxhYmVsIHtcXG4gIHdpZHRoOiA4NyU7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogOSU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMTBweCAxMHB4IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzbGF0ZWdyYXk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGFiZWwub25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVlOTM7XFxufVxcbi5sYWJlbC50d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxN2M5NjtcXG59XFxuXFxuLyogYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODViOGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMsIHRyYW5zZm9ybSAwLjFzO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG4ubW9kZUJ0biB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi8qIGF4aXMgYnV0dG9uICovXFxuLmJ1dHRvbkNvbnQge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiKDc3LCA3NywgNzcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgcmlnaHQ6IDdyZW07XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMC40cyBlYXNlLCByaWdodCAwLjRzIGVhc2U7XFxufVxcblxcbiNheGlzQnRuIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzZDtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYmEoMTU2LCAxNTYsIDE1NiwgMC4yOTUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgcmlnaHQ6IDJyZW07XFxufVxcblxcbiNheGlzQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yODEpO1xcbn1cXG5cXG4jYXhpc0J0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM3Nyk7XFxufVxcbi5zbGlkZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYigyMzUsIDY0LCAxMTUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2xpZGUub3V0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XFxufVxcblxcbi8qIG1lc3NhZ2VzICovXFxuI3RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTR2dztcXG4gIGNvbG9yOiAjMzIzMjNkO1xcbn1cXG5cXG4jZ2FtZU1vZGVQcm9tcHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuI3dpbm5lck1zZyB7XFxuICBjb2xvcjogIzMyMzIzZDtcXG4gIGZvbnQtc2l6ZTogOHZ3O1xcbn1cXG5cXG4jY29udGludWVUd28sXFxuI2NvbnRpbnVlT25lIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTB2aDtcXG4gIGxlZnQ6IDUwdnc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogYmFja2dyb3VuZCAgKi9cXG4uYmFja2dyb3VuZEJsdXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAjZmlsbCB7XFxuICAgIHdpZHRoOiAzdnc7XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IGNhbGMoNDB2dyAtIDEzJSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgI2JvYXJkT25lQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDU1dnc7XFxuICB9XFxuICAuY2VsbENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNmaWxsIHtcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxuICAuc2hpcENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzZ2dztcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IGNhbGMoNDB2dyAtIDEzJSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI2dhbWVib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gICNib2FyZE9uZUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgfVxcbiAgLmNlbGxDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDQ1dnc7XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuICAjZmlsbCB7XFxuICAgIGhlaWdodDogM3Z3O1xcbiAgfVxcbiAgLnNoaXBDb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDQ1dnc7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gIH1cXG4gIC5zaGlwIHtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICB9XFxuICAjYXhpc0J0biB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5idXR0b25Db250IHtcXG4gICAgYm90dG9tOiA3cmVtO1xcbiAgICByaWdodDogMi44cmVtO1xcbiAgfVxcbiAgLmxhYmVsIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiBjYWxjKDQ1dncgLSAxMyUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XFxuICAjYm9hcmRPbmVDb250YWluZXIge1xcbiAgICB3aWR0aDogNTV2dztcXG4gIH1cXG4gICNnYW1lYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY2VsbENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTV2dztcXG4gICAgd2lkdGg6IDU1dnc7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNmaWxsIHtcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxuICAuc2hpcENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDV2dztcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgfVxcbiAgLnNoaXAge1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gIH1cXG4gICNheGlzQnRuIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQixrQkFBa0I7QUFDbEI7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDViw2QkFB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bnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIGdhbWVib2FyZHMgKi9cXG4jZ2FtZWJvYXJkcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lciB7XFxuICB3aWR0aDogNDR2aDtcXG4gIGhlaWdodDogNDR2aDtcXG4gIG1heC1oZWlnaHQ6IDQ4dnc7XFxuICBtYXgtd2lkdGg6IDQ4dnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMnB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAycHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jZmlsbCB7XFxuICB3aWR0aDogOHZ3O1xcbiAgaGVpZ2h0OiA2MHZ3O1xcbn1cXG4uYm9hcmQge1xcbiAgbWF4LXdpZHRoOiA0NHZoO1xcbn1cXG4jYm9hcmRPbmVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDQ0dmg7XFxufVxcbiNib2FyZFR3b0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDR2aDtcXG59XFxuI2JvYXJkT25lIC5jZWxsIHtcXG4gIGJhY2tncm91bmQ6ICNjOGVkZmY7XFxufVxcbiNib2FyZFR3byAuY2VsbCB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uY2VsbCB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbiNib2FyZE9uZSAuY2VsbC5ib2FyZE9uZS5pbnZhbGlkUGxhY2Uge1xcbiAgYmFja2dyb3VuZDogI2Q4MjYyNjtcXG59XFxuI2JvYXJkT25lIC5jZWxsLmJvYXJkT25lLnZhbGlkUGxhY2Uge1xcbiAgYmFja2dyb3VuZDogIzJmYzk1NTtcXG59XFxuI2JvYXJkVHdvIC5jZWxsLmJvYXJkVHdvLmludmFsaWRQbGFjZSB7XFxuICBiYWNrZ3JvdW5kOiAjZDgyNjI2O1xcbn1cXG4jYm9hcmRUd28gLmNlbGwuYm9hcmRUd28udmFsaWRQbGFjZSB7XFxuICBiYWNrZ3JvdW5kOiAjMmZjOTU1O1xcbn1cXG4vKiBvbmxvYWQgcHJvbXAgKi9cXG5cXG4vKiBkaXNhYmxlIGJvYXJkICovXFxuLmRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBnYW1lYm9hcmQgaGlkZSBhbmltYXRpb24gKi9cXG4uYm9hcmQge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAxcztcXG59XFxuXFxuI2JvYXJkT25lLmJvYXJkLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAwcHgpO1xcbn1cXG5cXG4jYm9hcmRUd28uYm9hcmQuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwMHB4KTtcXG59XFxuXFxuLyogY29vcmRpbmF0ZXMgZGVjb3JhdGlvbiAqL1xcbi5jb29yZERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29vcmRMdHJzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNzE3Yzk2O1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lciAuY29vcmREaXY6Zmlyc3QtY2hpbGQgLmNvb3JkTHRycyB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIHNoaXBzICovXFxuLnNoaXBDb250YWluZXIge1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgd2lkdGg6IDkxJTtcXG4gIG1hcmdpbi1sZWZ0OiA5JTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzYsIDIzOCk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcblxcbi5zaGlwIHtcXG4gIG1hcmdpbjogMnB4O1xcbiAgbWF4LWhlaWdodDogMnJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDE2NywgMTg0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYigxMDUsIDEwNSwgMTA1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNDBtcztcXG59XFxuXFxuI3NoaXB5YXJkMiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG4jc2hpcHlhcmQyLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MDBweCk7XFxufVxcblxcbi5zaGlwLmZpIHtcXG4gIHdpZHRoOiA2cmVtO1xcbn1cXG4uc2hpcC5mbyB7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuLnNoaXAudGhyIHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXG4uc2hpcC50d28ge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogbGFiZWxzICovXFxuLmxhYmVsIHtcXG4gIHdpZHRoOiA4NyU7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogOSU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMTBweCAxMHB4IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzbGF0ZWdyYXk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGFiZWwub25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjVlOTM7XFxufVxcbi5sYWJlbC50d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxN2M5NjtcXG59XFxuXFxuLyogYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODViOGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGdyYXk7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMsIHRyYW5zZm9ybSAwLjFzO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYigxMDQsIDEwNCwgMTA0KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG4ubW9kZUJ0biB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi8qIGF4aXMgYnV0dG9uICovXFxuLmJ1dHRvbkNvbnQge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiKDc3LCA3NywgNzcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgcmlnaHQ6IDdyZW07XFxuICB0cmFuc2l0aW9uOiBib3R0b20gMC40cyBlYXNlLCByaWdodCAwLjRzIGVhc2U7XFxufVxcblxcbiNheGlzQnRuIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzZDtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYmEoMTU2LCAxNTYsIDE1NiwgMC4yOTUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAycmVtO1xcbiAgcmlnaHQ6IDJyZW07XFxufVxcblxcbiNheGlzQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yODEpO1xcbn1cXG5cXG4jYXhpc0J0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM3Nyk7XFxufVxcbi5zbGlkZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYigyMzUsIDY0LCAxMTUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2xpZGUub3V0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XFxufVxcblxcbi8qIG1lc3NhZ2VzICovXFxuI3RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTR2dztcXG4gIGNvbG9yOiAjMzIzMjNkO1xcbn1cXG5cXG4jZ2FtZU1vZGVQcm9tcHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuI3dpbm5lck1zZyB7XFxuICBjb2xvcjogIzMyMzIzZDtcXG4gIGZvbnQtc2l6ZTogOHZ3O1xcbn1cXG5cXG4jY29udGludWVUd28sXFxuI2NvbnRpbnVlT25lIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTB2aDtcXG4gIGxlZnQ6IDUwdnc7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogYmFja2dyb3VuZCAgKi9cXG4uYmFja2dyb3VuZEJsdXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAjZmlsbCB7XFxuICAgIHdpZHRoOiAzdnc7XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IGNhbGMoNDB2dyAtIDEzJSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgI2JvYXJkT25lQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDU1dnc7XFxuICB9XFxuICAuY2VsbENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNmaWxsIHtcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxuICAuc2hpcENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzZ2dztcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IGNhbGMoNDB2dyAtIDEzJSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI2dhbWVib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gICNib2FyZE9uZUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgfVxcbiAgLmNlbGxDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDQ1dnc7XFxuICAgIHdpZHRoOiA0NXZ3O1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuICAjZmlsbCB7XFxuICAgIGhlaWdodDogM3Z3O1xcbiAgfVxcbiAgLnNoaXBDb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDQ1dnc7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gIH1cXG4gIC5zaGlwIHtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxuICB9XFxuICAjYXhpc0J0biB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5idXR0b25Db250IHtcXG4gICAgYm90dG9tOiA3cmVtO1xcbiAgICByaWdodDogMi44cmVtO1xcbiAgfVxcbiAgLmxhYmVsIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiBjYWxjKDQ1dncgLSAxMyUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XFxuICAjYm9hcmRPbmVDb250YWluZXIge1xcbiAgICB3aWR0aDogNTV2dztcXG4gIH1cXG4gICNnYW1lYm9hcmRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY2VsbENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTV2dztcXG4gICAgd2lkdGg6IDU1dnc7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNmaWxsIHtcXG4gICAgaGVpZ2h0OiAzdnc7XFxuICB9XFxuICAuc2hpcENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDV2dztcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgfVxcbiAgLnNoaXAge1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG4gIH1cXG4gICNheGlzQnRuIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICB9XFxuICAubGFiZWwge1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHRleHRGYWN0b3J5LFxuICBlbGVtZW50RmFjdG9yeSxcbiAgZGl2RmFjdG9yeSxcbiAgcXNlbCxcbiAgcXNlbGEsXG4gIHJlbW92ZSxcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuZXhwb3J0IHsgZG9tLCBjbHNzIH07XG5sZXQgZG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJvZHkgPSBxc2VsKFwiYm9keVwiKTtcblxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCh3aGljaCkge1xuICAgIGxldCBjZWxsQ29udGFpbmVyID0gZGl2RmFjdG9yeShcIlwiLCBcImNlbGxDb250YWluZXJcIik7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMTsgYSsrKSB7XG4gICAgICBmb3IgKGxldCBiID0gMDsgYiA8IDExOyBiKyspIHtcbiAgICAgICAgaWYgKGEgPT09IDAgfHwgYiA9PT0gMCkge1xuICAgICAgICAgIGxldCBsdHJzID0gdGV4dEZhY3RvcnkoXCJwXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiY29vcmRMdHJzXCIpO1xuICAgICAgICAgIChhID09PSAwKT8gKGx0cnMudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgYiAtIDEpKVxuICAgICAgICAgICAgICAgICAgIDogKGx0cnMudGV4dENvbnRlbnQgPSBhKTtcbiAgICAgICAgICBsZXQgZGl2cyA9IGRpdkZhY3RvcnkoXCJcIiwgXCJjb29yZERpdlwiLCBjZWxsQ29udGFpbmVyKS5hcHBlbmQobHRycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2RmFjdG9yeShcIlwiLCBgY2VsbCAke3doaWNofWAsIGNlbGxDb250YWluZXIpLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiLFxuICAgICAgICAgICAgYCR7YSAtIDF9JHtiIC0gMX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2VsbENvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoYmF0dGxlTG9ncywgZG9udENsZWFyKSB7XG4gICAgaWYgKGRvbnRDbGVhciAhPT0gdHJ1ZSkge1xuICAgICAgY2xlYXJCb2FyZCgpO1xuICAgIH1cbiAgICBsZXQgcG9wdWxhdGUgPSAoYm9hcmQsIHdoaWNoLCBzaG93KSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7d2hpY2h9YCk7XG4gICAgICBib2FyZC5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsZXQgZG9tQ2VsbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3doaWNofVtkYXRhLWluZGV4PScke2l0ZW1bMV19J11gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZW1bMF0gPT09IFwib2JqZWN0XCIgJiYgc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZG9tQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2IoMTc1LCAxNjcsIDE4NClcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGl0ZW1bMF0gPT09IFwibWlzc2VkXCIpIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZCA9IFwibGlnaHRncmV5XCI7XG4gICAgICAgICAgaWYgKGl0ZW1bMF0uaXNIaXQgPT09IHRydWUpIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZCA9IFwiY3JpbXNvblwiO1xuICAgICAgICB9LCAxMClcbiAgICAgICk7XG4gICAgfTtcbiAgICBsZXQgcGxheWVyT25lVHVybiA9ICgpID0+IHtcbiAgICAgIHBvcHVsYXRlKGJhdHRsZUxvZ3NbXCJib2FyZE9uZVwiXSwgT2JqZWN0LmtleXMoYmF0dGxlTG9ncylbMF0sIHRydWUpO1xuICAgICAgcG9wdWxhdGUoYmF0dGxlTG9nc1tcImJvYXJkVHdvXCJdLCBPYmplY3Qua2V5cyhiYXR0bGVMb2dzKVsxXSwgZmFsc2UpO1xuICAgIH07XG4gICAgbGV0IHBsYXllclR3b1R1cm4gPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0ZShiYXR0bGVMb2dzW1wiYm9hcmRPbmVcIl0sIE9iamVjdC5rZXlzKGJhdHRsZUxvZ3MpWzBdLCBmYWxzZSk7XG4gICAgICBwb3B1bGF0ZShiYXR0bGVMb2dzW1wiYm9hcmRUd29cIl0sIE9iamVjdC5rZXlzKGJhdHRsZUxvZ3MpWzFdLCB0cnVlKTtcbiAgICB9O1xuICAgIGxldCBhbGwgPSAoKSA9PiB7XG4gICAgICBwb3B1bGF0ZShiYXR0bGVMb2dzW1wiYm9hcmRPbmVcIl0sIE9iamVjdC5rZXlzKGJhdHRsZUxvZ3MpWzBdLCB0cnVlKTtcbiAgICAgIHBvcHVsYXRlKGJhdHRsZUxvZ3NbXCJib2FyZFR3b1wiXSwgT2JqZWN0LmtleXMoYmF0dGxlTG9ncylbMV0sIHRydWUpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXllck9uZVR1cm4sXG4gICAgICBwbGF5ZXJUd29UdXJuLFxuICAgICAgYWxsLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5R2hvc3RTaGlwKGluZGV4LCBsZW5ndGgsIGF4aXMsYm9hcmQsIHZhbGlkKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHsneCc6aW5kZXguc3BsaXQoJycpWzFdLCAneSc6aW5kZXguc3BsaXQoJycpWzBdfVxuICAgICAgdHJ5IHt3aGlsZShsZW5ndGggPiAwKSB7XG4gICAgICAgIHFzZWwoYC4ke2JvYXJkfVtkYXRhLWluZGV4PVwiJHtkaXJlY3Rpb25bJ3knXX0ke2RpcmVjdGlvblsneCddfVwiXWApLmNsYXNzTGlzdC5hZGQodmFsaWQsJ3BsYWNlJylcbiAgICAgICAgZGlyZWN0aW9uW2F4aXNdKys7XG4gICAgICAgIGxlbmd0aC0tO1xuICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGlwIGlzIHRvbyBmYXIgb3V0JylcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gIGZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gICAgbGV0IGFsbENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICAgIGFsbENlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZFBsYWNlXCIsIFwiaW52YWxpZFBsYWNlXCIsIFwicGxhY2VcIilcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWVNb2RlUHJvbXB0KCkge1xuICAgIGxldCBiYWNrZ3JvdW5kID0gZGl2RmFjdG9yeShcImdhbWVNb2RlUHJvbXB0XCIsIFwiYmFja2dyb3VuZEJsdXJcIiwgcXNlbChcImJvZHlcIikpO1xuICAgIHRleHRGYWN0b3J5KFwiaDFcIiwgXCJCYXR0bGVzaGlwXCIsIGJhY2tncm91bmQsIFwidGl0bGVcIik7XG4gICAgbGV0IGJ0bmJveCA9IGRpdkZhY3RvcnkoXCJidXR0b25ib3hcIiwgXCJcIiwgYmFja2dyb3VuZCk7XG4gICAgZWxlbWVudEZhY3RvcnkoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgYnRuYm94LFxuICAgICAgXCJ2Q29tcHV0ZXJcIixcbiAgICAgIFwibW9kZUJ0blwiLFxuICAgICAgXCJQbGF5IGFnYWluc3QgY29tcHV0ZXJcIlxuICAgICk7XG4gICAgZWxlbWVudEZhY3RvcnkoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgYnRuYm94LFxuICAgICAgXCJ2UGxheWVyXCIsXG4gICAgICBcIm1vZGVCdG5cIixcbiAgICAgIFwiUGxheSBhZ2FpbnN0IG90aGVyIHBsYXllclwiXG4gICAgKTtcbiAgICByZXR1cm4gYmFja2dyb3VuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWVNc2dzKHRleHQsIGVsZW1lbnQsIGlkLCByZW1vdmUpIHtcbiAgICBpZiAocmVtb3ZlID09PSB0cnVlKSB7XG4gICAgICBxc2VsKGAjJHtpZH1gKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRGYWN0b3J5KFwiaDFcIiwgdGV4dCwgZWxlbWVudCwgaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzV29uKHdpbm5lcikge1xuICAgIGxldCBiYWNrZ3JvdW5kID0gZGl2RmFjdG9yeShcImdhbWVvdmVyXCIsIFwiYmFja2dyb3VuZEJsdXJcIiwgcXNlbChcImJvZHlcIikpO1xuICAgIHRleHRGYWN0b3J5KFwiaDFcIiwgYCR7d2lubmVyfSBoYXMgd29uYCwgYmFja2dyb3VuZCwgXCJ3aW5uZXJNc2dcIik7XG4gICAgZWxlbWVudEZhY3RvcnkoXCJidXR0b25cIiwgYmFja2dyb3VuZCwgXCJyZXN0YXJ0XCIsIFwiXCIsIFwiQW5vdGhlciBSb3VuZFwiKTtcbiAgICByZXR1cm4gYmFja2dyb3VuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dTaGlwcygpIHtcbiAgICBxc2VsYShcIi5zaGlwXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51ZUdhbWUobXNzZywgcGxheWVyKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRGYWN0b3J5KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIGJvZHksXG4gICAgICBgY29udGludWUke3BsYXllcn1gLFxuICAgICAgXCJjb250aW51ZVwiLFxuICAgICAgbXNzZ1xuICAgICk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHBvcHVsYXRlQm9hcmQsXG4gICAgY2xlYXJCb2FyZCxcbiAgICBnYW1lTW9kZVByb21wdCxcbiAgICBnYW1lTXNncyxcbiAgICBoYXNXb24sXG4gICAgc2hvd1NoaXBzLFxuICAgIGNvbnRpbnVlR2FtZSxcbiAgICBkaXNwbGF5R2hvc3RTaGlwXG4gIH07XG59KSgpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICByZW1vdmUoXCIjZ2FtZW92ZXJcIik7XG4gIGRvbS5jbGVhckJvYXJkKCk7XG4gIGRvbS5nYW1lTW9kZVByb21wdCgpO1xuICBkb20uc2hvd1NoaXBzKCk7XG4gIHFzZWxhKCcuaGlkZGVuJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpXG4gIHFzZWxhKCcuZGlzYWJsZWQnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSlcbn1cblxubGV0IGNsc3MgPSBmdW5jdGlvbiAoY2xzc1N0cikge1xuICBsZXQgYWRkVG8gPSAoLi4uZWxlbWVudHMpID0+XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKGNsc3NTdHIpKTtcbiAgbGV0IHJlbW92ZUZyb20gPSAoLi4uZWxlbWVudHMpID0+XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGNsc3NTdHIpKTtcbiAgcmV0dXJuIHtcbiAgICBhZGRUbyxcbiAgICByZW1vdmVGcm9tLFxuICB9O1xufTtcbiIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuZXhwb3J0IHsgbWFrZVNoaXAgfTtcblxuLy8vIFNoaXBzIC8vL1xubGV0IFNoaXBGYWN0b3J5ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgbGV0IGxlbmd0aCA9IHNpemU7XG4gIGxldCBodWxsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGkgPSBsZW5ndGg7XG4gICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICBhcnIucHVzaCgxKTtcbiAgICAgIGktLTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfSkoKTtcbiAgbGV0IGhpdCA9IChpbmRleCkgPT4gKGh1bGxbaW5kZXhdID0gMCk7XG4gIGxldCBpc1N1bmsgPSAoKSA9PiAhaHVsbC5maW5kKChpdGVtKSA9PiBpdGVtID09PSAxKTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCBodWxsLCBoaXQsIGlzU3VuayB9O1xufTtcbmZ1bmN0aW9uIG1ha2VTaGlwKHNpemUpIHtcbiAgY29uc3Qgc2hpcCA9IFNoaXBGYWN0b3J5KHNpemUpO1xuICByZXR1cm4gc2hpcDtcbn1cbi8vLyBHYW1lYm9hcmQgLy8vXG5sZXQgR2FtZWJvYXJkRmFjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG1ha2VUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgbGV0IHNpemUgPSAxMDtcbiAgICB3aGlsZSAoc2l6ZSA+IDApIHtcbiAgICAgIGJvYXJkLnB1c2goW10pO1xuICAgICAgc2l6ZS0tO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICBib2FyZFswXS5wdXNoKG51bGwpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMCAtIDE7IGkrKykge1xuICAgICAgaWYgKGkgPj0gMSkgYm9hcmRbaV0ucHVzaChudWxsKTtcbiAgICB9XG4gICAgbGV0IGdhbWVib2FyZCA9IGJvYXJkO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZ2FtZWJvYXJkWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8IGdhbWVib2FyZC5sZW5ndGg7IHkrKykge1xuICAgICAgICBnYW1lYm9hcmRbaV1beV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9KSgpO1xuICBsZXQgaXRzZWxmID0gbWFrZVRhYmxlO1xuXG4gIGxldCBhbGxTaGlwcyA9IFtdO1xuICBjb25zdCBpc1ZhbGlkUGxhY2UgPSAoYSwgYiwgc2l6ZSwgYXhpcykgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZHJvcHNpdGUgPSBbXTtcbiAgICB3aGlsZSAoaSA8IHNpemUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgIGlmIChiICsgaSA+IDkpIGRyb3BzaXRlLnB1c2goXCJvdXQgb2YgYm9yZGVyXCIpO1xuICAgICAgICAgIGRyb3BzaXRlLnB1c2goaXRzZWxmW2FdW2IgKyBpXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICBkcm9wc2l0ZS5wdXNoKGl0c2VsZlthICsgaV1bYl0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZHJvcHNpdGUucHVzaChcIm91dCBvZiBib3JkZXJcIik7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiAhZHJvcHNpdGUuc29tZSgoaXRlbSkgPT4gaXRlbSAhPSBudWxsKTtcbiAgfTtcbiAgY29uc3QgcGxhY2UgPSAoYSwgYiwgc2l6ZSwgYXhpcykgPT4ge1xuICAgIGxldCBuZXdTaGlwID0gbWFrZVNoaXAoc2l6ZSk7XG4gICAgYWxsU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzaXplKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgaXRzZWxmW2FdW2IgKyBpXSA9IHtcbiAgICAgICAgICBzaGlwSUQ6IGFsbFNoaXBzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgaHVsbDogaSxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdHNlbGZbYSArIGldW2JdID0ge1xuICAgICAgICAgIHNoaXBJRDogYWxsU2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICBodWxsOiBpLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoYSwgYikgPT4ge1xuICAgIGlmIChpdHNlbGZbYV1bYl0gIT0gbnVsbCAmJiBpdHNlbGZbYV1bYl0gIT0gXCJtaXNzZWRcIikge1xuICAgICAgbGV0IHNoaXBJRCA9IGl0c2VsZlthXVtiXVtcInNoaXBJRFwiXTtcbiAgICAgIGxldCBzaGlwSHVsbCA9IGl0c2VsZlthXVtiXVtcImh1bGxcIl07XG4gICAgICBhbGxTaGlwc1tzaGlwSURdLmhpdChzaGlwSHVsbCk7XG4gICAgICBpdHNlbGZbYV1bYl0uaXNIaXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdHNlbGZbYV1bYl0gPSBcIm1pc3NlZFwiO1xuICAgIH1cbiAgfTtcbiAgbGV0IGxvZ0JhdHRsZSA9ICgpID0+IHtcbiAgICBsZXQgbG9nID0gW107XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSsrKSB7XG4gICAgICBmb3IgKGxldCBiID0gMDsgYiA8IDEwOyBiKyspIHtcbiAgICAgICAgaWYgKGl0c2VsZlthXVtiXSAhPSBudWxsKSB7XG4gICAgICAgICAgbG9nLnB1c2goW2l0c2VsZlthXVtiXSwgYCR7YX0ke2J9YF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2c7XG4gIH07XG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuICFhbGxTaGlwcy5zb21lKChzaGlwKSA9PiBzaGlwLmlzU3VuaygpID09PSBmYWxzZSk7XG4gIH07XG4gIGxldCByYW5kb20gPSAobWluLCBtYXgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIDAgKyBtaW4pICsgMCk7XG4gIH07XG4gIGxldCBwb3B1bGF0ZVNlbGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNoaXBzID0gWzIsIDMsIDMsIDQsIDVdO1xuICAgIHdoaWxlIChzaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgYXhpcyA9IFtcInhcIiwgXCJ5XCJdO1xuICAgICAgbGV0IHBpY2sgPSAoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgeCA9IHJhbmRvbSgxLCA5KTtcbiAgICAgICAgbGV0IHkgPSByYW5kb20oMSwgOSk7XG4gICAgICAgIGxldCBheCA9IGF4aXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXhpcy5sZW5ndGgpXTtcbiAgICAgICAgaWYgKHggKyBpdGVtID4gOSkgeCA9IHggLSBpdGVtO1xuICAgICAgICBpZiAoeSArIGl0ZW0gPiA5KSB5ID0geSAtIGl0ZW07XG4gICAgICAgIHJldHVybiBbeSwgeCwgYXhdO1xuICAgICAgfTtcbiAgICAgIHNoaXBzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwaWNrZWQgPSBwaWNrKGl0ZW0pO1xuICAgICAgICBpZiAoaXNWYWxpZFBsYWNlKHBpY2tlZFswXSwgcGlja2VkWzFdLCBpdGVtLCBwaWNrZWRbMl0pKSB7XG4gICAgICAgICAgcGxhY2UocGlja2VkWzBdLCBwaWNrZWRbMV0sIGl0ZW0sIHBpY2tlZFsyXSk7XG4gICAgICAgICAgc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGl0c2VsZixcbiAgICBwbGFjZSxcbiAgICBpc1ZhbGlkUGxhY2UsXG4gICAgYWxsU2hpcHMsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBpc0dhbWVPdmVyLFxuICAgIGxvZ0JhdHRsZSxcbiAgICBwb3B1bGF0ZVNlbGYsXG4gIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCb2FyZCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkRmFjdG9yeSgpO1xuICByZXR1cm4gZ2FtZWJvYXJkO1xufVxuXG4vLy8gcGxheWVycyAvLy9cbmxldCBQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyTmFtZSwgYm9hcmRzKSB7XG4gIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpICsgMCk7XG4gIH07XG4gIGNvbnN0IG5hbWUgPSBwbGF5ZXJOYW1lO1xuICBjb25zdCBteUdhbWVib2FyZCA9IGJvYXJkc1swXTtcbiAgY29uc3QgdGhlaXJHYW1lYm9hcmQgPSBib2FyZHNbMV07XG4gIGxldCBtb3ZlcyA9IDA7XG4gIGxldCBnZXRNb3ZlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbW92ZXM7XG4gIH07XG4gIGxldCBhdHRhY2sgPSAoYSwgYikgPT4ge1xuICAgIHRoZWlyR2FtZWJvYXJkLnJlY2lldmVBdHRhY2soYSwgYik7XG4gICAgbW92ZXMrKztcbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKGEsIGIsIHNpemUsIGF4aXMpID0+IHtcbiAgICBteUdhbWVib2FyZC5wbGFjZShhLCBiLCBzaXplLCBheGlzKTtcbiAgfTtcbiAgbGV0IG1ha2VSYW5kb21Nb3ZlID0gKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IFtyYW5kb20oKSwgcmFuZG9tKCldO1xuICAgIGxldCBlbmVteVBvc2l0aW9uID0gdGhlaXJHYW1lYm9hcmQuaXRzZWxmW2luZGV4WzBdXVtpbmRleFsxXV07XG4gICAgaWYgKGVuZW15UG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgIGF0dGFjayhpbmRleFswXSwgaW5kZXhbMV0pO1xuICAgIH0gZWxzZSBpZiAoZW5lbXlQb3NpdGlvbiAhPT0gXCJtaXNzZWRcIiAmJiBlbmVteVBvc2l0aW9uLmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgYXR0YWNrKGluZGV4WzBdLCBpbmRleFsxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ha2VSYW5kb21Nb3ZlKCk7XG4gICAgfVxuICB9O1xuICBsZXQgd29uID0gKCkgPT4ge1xuICAgIGlmICh0aGVpckdhbWVib2FyZC5pc0dhbWVPdmVyKCkgPT09IHRydWUpIHJldHVybiBuYW1lO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcGxhY2VTaGlwLFxuICAgIGF0dGFjayxcbiAgICBtYWtlUmFuZG9tTW92ZSxcbiAgICBteUdhbWVib2FyZCxcbiAgICB0aGVpckdhbWVib2FyZCxcbiAgICBnZXRNb3ZlcyxcbiAgICB3b24sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBsYXllcihuYW1lLCBib2FyZHMpIHtcbiAgbGV0IG5ld1BsYXllciA9IFBsYXllcihuYW1lLCBib2FyZHMpO1xuICByZXR1cm4gbmV3UGxheWVyO1xufVxuIiwiaW1wb3J0IHsgbWFrZUJvYXJkLCBtYWtlUGxheWVyIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lKGdhbWVNb2RlKSB7XG4gIGxldCBib2FyZE9uZSA9IG1ha2VCb2FyZCgpO1xuICBsZXQgYm9hcmRUd28gPSBtYWtlQm9hcmQoKTtcbiAgbGV0IHBsYXllck9uZSA9IG1ha2VQbGF5ZXIoXCJPbmVcIiwgW2JvYXJkT25lLCBib2FyZFR3b10pO1xuICBsZXQgcGxheWVyVHdvID0gbWFrZVBsYXllcihcIlR3b1wiLCBbYm9hcmRUd28sIGJvYXJkT25lXSk7XG4gIGxldCBib2FyZEFyciA9IFtib2FyZE9uZSwgYm9hcmRUd29dO1xuICBsZXQgbW9kZSA9IGdhbWVNb2RlXG4gIFxuICBsZXQgd2hvc2VUdXJuID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUuZ2V0TW92ZXMoKSA+IHBsYXllclR3by5nZXRNb3ZlcygpKSB7XG4gICAgICByZXR1cm4geydhdHRhY2tlcic6IHBsYXllclR3byAsICdkZWZlbmRlcic6IHBsYXllck9uZX1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsnYXR0YWNrZXInOiBwbGF5ZXJPbmUgLCdkZWZlbmRlcic6IHBsYXllclR3b31cbiAgICB9XG4gIH07XG4gIFxuICBsZXQgdGFrZVR1cm4gPSAoYSwgYikgPT4gd2hvc2VUdXJuKCkuYXR0YWNrKGEsIGIpO1xuXG4gIGxldCBpc092ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkQXJyLnNvbWUoKGJvYXJkKSA9PiB7XG4gICAgICByZXR1cm4gYm9hcmQuaXNHYW1lT3ZlcigpID09PSB0cnVlO1xuICAgIH0pO1xuICB9O1xuICBcbiAgbGV0IHdpbm5lciA9ICgpID0+IHtcbiAgICBpZiAoaXNPdmVyKCkpIHtcbiAgICAgIGlmIChwbGF5ZXJPbmUud29uKCkgPT09IHBsYXllck9uZS5uYW1lKSByZXR1cm4gcGxheWVyT25lLndvbigpO1xuICAgICAgZWxzZSByZXR1cm4gcGxheWVyVHdvLndvbigpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGxldCBsb2cgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgYm9hcmRPbmU6IGJvYXJkT25lLmxvZ0JhdHRsZSgpLCBib2FyZFR3bzogYm9hcmRUd28ubG9nQmF0dGxlKCkgfTtcbiAgfTtcblxuXG4gIGxldCB2Q29tcHV0ZXIgPSAoYSwgYiwgZGlzcGxheUZ1bmMsIGRpc3BsYXlXaW5uZXIpID0+IHtcbiAgICBpZihpc092ZXIoKSkge1xuICAgICAgb3ZlcihkaXNwbGF5V2lubmVyKVxuICAgIH1cbiAgICBwbGF5ZXJPbmUuYXR0YWNrKGEsIGIpO1xuICAgIGRpc3BsYXlGdW5jKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXJUd28ubWFrZVJhbmRvbU1vdmUoKTtcbiAgICAgIGRpc3BsYXlGdW5jKCk7XG4gICAgfSwgNDUwKTtcbiAgfTtcblxuICBsZXQgdlBsYXllciA9IChhLCBiLCBkaXNwbGF5RnVuYywgZGlzcGxheVdpbm5lcikgPT4ge1xuICAgIGlmKHdob3NlVHVybigpID09PSBwbGF5ZXJPbmUpIHtcbiAgICAgIHBsYXllck9uZS5hdHRhY2soYSxiKVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJUd28uYXR0YWNrKGEsYilcbiAgICB9XG4gICAgZGlzcGxheUZ1bmMoKVxuICAgIGlmKGlzT3ZlcigpKSB7XG4gICAgICBvdmVyKGRpc3BsYXlXaW5uZXIpXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG92ZXIoZGlzcGxheUZ1bmMpIHtcbiAgICBkaXNwbGF5RnVuYyh3aW5uZXIoKSlcbiAgICBib2FyZE9uZSA9IG51bGw7XG4gICAgYm9hcmRUd28gPSBudWxsO1xuICAgIHBsYXllck9uZSA9IG51bGw7XG4gICAgcGxheWVyVHdvID0gbnVsbDtcblxuICB9XG4gIHJldHVybiB7XG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgICBib2FyZE9uZSxcbiAgICBib2FyZFR3byxcbiAgICB3aG9zZVR1cm4sXG4gICAgdGFrZVR1cm4sXG4gICAgaXNPdmVyLFxuICAgIHdpbm5lcixcbiAgICBsb2csXG4gICAgdkNvbXB1dGVyLFxuICAgIHZQbGF5ZXIsXG4gICAgbW9kZVxuICB9O1xufVxuIiwiZnVuY3Rpb24gbWFrZSh0eXBlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBmdW5jdGlvbiBzZXRJZChpZCkge1xuICAgIGlmIChpZCAhPT0gJycgJiYgaWQgIT09IHVuZGVmaW5lZCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICB9XG4gIGZ1bmN0aW9uIHNldENsYXNzKGNzc0NsYXNzKSB7XG4gICAgaWYgKGNzc0NsYXNzICE9PSAnJyAmJiBjc3NDbGFzcyAhPT0gdW5kZWZpbmVkKSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjc3NDbGFzcyk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkVGV4dCh0ZXh0Q29udGVudCkge1xuICAgIGlmICh0ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgZnVuY3Rpb24gYXBwZW5kRWxlbWVudChhcHBlbmRUbykge1xuICAgIGlmIChhcHBlbmRUbyAhPT0gdW5kZWZpbmVkICYmIGFwcGVuZFRvICE9ICcnKSBhcHBlbmRUby5hcHBlbmQoZWxlbWVudCk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0U3JjKHNyYykge1xuICAgIGlmIChzcmMgIT09IHVuZGVmaW5lZCkgZWxlbWVudC5zcmMgPSBzcmM7XG4gIH1cbiAgY29uc3QgcmV0dXJuRWxlbWVudCA9ICgpID0+IGVsZW1lbnQ7XG4gIHJldHVybiB7XG4gICAgYWRkVGV4dCwgc2V0SWQsIHNldENsYXNzLCBzZXRTcmMsIGFwcGVuZEVsZW1lbnQsIHJldHVybkVsZW1lbnQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RmFjdG9yeSh0eXBlLCBhcHBlbmRUbywgaWQsIGNzc0NsYXNzLCB0ZXh0Q29udGVudCwgc3JjKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBtYWtlKHR5cGUpO1xuICBlbGVtZW50LmFwcGVuZEVsZW1lbnQoYXBwZW5kVG8pO1xuICBlbGVtZW50LmFkZFRleHQodGV4dENvbnRlbnQpO1xuICBlbGVtZW50LnNldElkKGlkKTtcbiAgZWxlbWVudC5zZXRDbGFzcyhjc3NDbGFzcyk7XG4gIGVsZW1lbnQuc2V0U3JjKHNyYyk7XG4gIHJldHVybiBlbGVtZW50LnJldHVybkVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRGYWN0b3J5KHR5cGUsIHRleHRDb250ZW50LCBhcHBlbmRUbywgaWQsIGNzc0NsYXNzKSB7XG4gIGNvbnN0IHRleHQgPSBtYWtlKHR5cGUpO1xuICB0ZXh0LmFkZFRleHQodGV4dENvbnRlbnQpO1xuICB0ZXh0LmFwcGVuZEVsZW1lbnQoYXBwZW5kVG8pO1xuICB0ZXh0LnNldElkKGlkKTtcbiAgdGV4dC5zZXRDbGFzcyhjc3NDbGFzcyk7XG4gIHJldHVybiB0ZXh0LnJldHVybkVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdkZhY3RvcnkoaWQsIGNzc0NsYXNzLCBhcHBlbmRUbykge1xuICBjb25zdCBuZXdEaXYgPSBtYWtlKCdkaXYnKTtcbiAgbmV3RGl2LnNldElkKGlkKTtcbiAgbmV3RGl2LnNldENsYXNzKGNzc0NsYXNzKTtcbiAgbmV3RGl2LmFwcGVuZEVsZW1lbnQoYXBwZW5kVG8pO1xuICByZXR1cm4gbmV3RGl2LnJldHVybkVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHFzZWwoZWxlbWVudCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBxc2VsYShlbGVtZW50KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBxc2VsKGVsZW1lbnQpLnJlbW92ZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlKGVsZW1lbnQsIGRpcykge1xuICBpZihkaXMgPT09IHRydWUpIHFzZWwoZWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKVxuICBlbHNlIHFzZWwoZWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxufVxuXG4vLy8gd2FpdCB0aWxsIHRydWVcbmxldCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3IoZil7XG4gICAgICAgIHdoaWxlKCFmKCkpIGF3YWl0IHNsZWVwKDEwMDApO1xuICAgICAgICByZXR1cm4gZigpO1xuICAgIH07XG4gICAgXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlR2FtZSB9IGZyb20gXCIuL2dhbWVsb29wLmpzXCI7XG5pbXBvcnQgeyBkb20sIHJlc3RhcnQsIGNsc3MgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHFzZWwsIHJlbW92ZSwgd2FpdEZvciwgcXNlbGEgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmxldCBnYW1lO1xubGV0IGJvZHkgPSBxc2VsKFwiYm9keVwiKTtcbmxldCBib2FyZE9uZSA9IHFzZWwoXCIjYm9hcmRPbmVcIik7XG5sZXQgYm9hcmRUd28gPSBxc2VsKFwiI2JvYXJkVHdvXCIpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBxc2VsKFwiI2JvYXJkT25lXCIpLmFwcGVuZChkb20uY3JlYXRlQm9hcmQoXCJib2FyZE9uZVwiKSk7XG4gIHFzZWwoXCIjYm9hcmRUd29cIikuYXBwZW5kKGRvbS5jcmVhdGVCb2FyZChcImJvYXJkVHdvXCIpKTtcbiAgZG9tLmdhbWVNb2RlUHJvbXB0KCk7XG59O1xuXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuaWQgPT09IFwidkNvbXB1dGVyXCIpIHtcbiAgICBib2FyZE9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG5cbiAgICBnYW1lID0gY3JlYXRlR2FtZShcInZDb21wdXRlclwiKTtcbiAgICByZW1vdmUoXCIjZ2FtZU1vZGVQcm9tcHRcIik7XG4gICAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIHFzZWwoXCIjc2hpcHlhcmQyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgYXdhaXQgd2FpdEZvcigoKSA9PiBnYW1lLmJvYXJkT25lLmFsbFNoaXBzLmxlbmd0aCA9PT0gNSkudGhlbigoKSA9PiB7XG4gICAgICBib2FyZFR3by5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICBnYW1lLmJvYXJkVHdvLnBvcHVsYXRlU2VsZigpO1xuICAgICAgZG9tLnBvcHVsYXRlQm9hcmQoZ2FtZS5sb2coKSkucGxheWVyT25lVHVybigpO1xuICAgIH0pO1xuICB9XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ2UGxheWVyXCIpIHtcbiAgICBnYW1lID0gY3JlYXRlR2FtZShcInZQbGF5ZXJcIik7XG4gICAgdlBsYXllcigpO1xuICB9XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gXCJyZXN0YXJ0XCIpIHtcbiAgICByZXN0YXJ0KCk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gZGlzcGxheU9uZXBsYXllcigpIHtcbiAgcmV0dXJuIGRvbS5wb3B1bGF0ZUJvYXJkKGdhbWUubG9nKCksIHRydWUpLnBsYXllck9uZVR1cm4oXCJ2Q29tcHV0ZXJcIik7XG59XG5cbi8vLyBvbmUgcGxheWVyXG5xc2VsKFwiI2JvYXJkVHdvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZ2FtZS5tb2RlID09PSBcInZDb21wdXRlclwiKSB7XG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGdhbWUuYm9hcmRUd28uYWxsU2hpcHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gT2JqZWN0LnZhbHVlcyhlLnRhcmdldC5kYXRhc2V0KVswXS5zcGxpdChcIlwiKTtcbiAgICAgICAgZ2FtZS52Q29tcHV0ZXIoaW5kZXhbMF0sIGluZGV4WzFdLCBkaXNwbGF5T25lcGxheWVyLCBkb20uaGFzV29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vLy8gdHdvIHBsYXllclxuYXN5bmMgZnVuY3Rpb24gdlBsYXllcigpIHtcbiAgcmVtb3ZlKFwiI2dhbWVNb2RlUHJvbXB0XCIpOyAvL1xuICBib2FyZFR3by5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gIGF3YWl0IHdhaXRGb3IoKCkgPT4gZ2FtZS5ib2FyZE9uZS5hbGxTaGlwcy5sZW5ndGggPT09IDUpLnRoZW4oKCkgPT4ge1xuICAgIGJvYXJkVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICBib2FyZE9uZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgYm9hcmRPbmUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG4gIGF3YWl0IHdhaXRGb3IoKCkgPT4gZ2FtZS5ib2FyZFR3by5hbGxTaGlwcy5sZW5ndGggPT09IDUpLnRoZW4oKCkgPT4ge1xuICAgIGJvYXJkVHdvLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIGRvbS5jb250aW51ZUdhbWUoXCJQbGF5ZXIgb25lLCBwcmVzcyBidXR0b24gdG8gbWFrZSB5b3VyIG1vdmVcIiwgXCJPbmVcIik7XG4gIH0pO1xufVxuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGdhbWUubW9kZSA9PT0gXCJ2UGxheWVyXCIgJiYgZ2FtZS5ib2FyZFR3by5hbGxTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICBsZXQgYXR0YWNrZXJCb2FyZCA9IHFzZWwoYCNib2FyZCR7Z2FtZS53aG9zZVR1cm4oKS5hdHRhY2tlci5uYW1lfWApO1xuICAgIGxldCBkZWZlbmRlckJvYXJkID0gcXNlbChgI2JvYXJkJHtnYW1lLndob3NlVHVybigpLmRlZmVuZGVyLm5hbWV9YCk7XG4gICAgYXR0YWNrZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgZGVmZW5kZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH1cbn0pO1xuXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGludWVcIikpIHtcbiAgICBjbHNzKFwiaGlkZGVuXCIpLnJlbW92ZUZyb20oYm9hcmRPbmUsIGJvYXJkVHdvKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuaWQgPT09IFwiY29udGludWVPbmVcIikge1xuICAgIGRvbS5wb3B1bGF0ZUJvYXJkKGdhbWUubG9nKCkpLnBsYXllck9uZVR1cm4oKTtcbiAgICByZW1vdmUoXCIjY29udGludWVPbmVcIik7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiY29udGludWVUd29cIikge1xuICAgIGRvbS5wb3B1bGF0ZUJvYXJkKGdhbWUubG9nKCkpLnBsYXllclR3b1R1cm4oKTtcbiAgICByZW1vdmUoXCIjY29udGludWVUd29cIik7XG4gIH1cbn0pO1xuXG5xc2VsKFwiI2JvYXJkVHdvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZ2FtZS5tb2RlID09PSBcInZQbGF5ZXJcIikge1xuICAgIHZQbGF5KGUsIFwicGxheWVyT25lXCIpO1xuICAgIGRvbVR1cm4oXCJwbGF5ZXJUd29cIiwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5xc2VsKFwiI2JvYXJkT25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZ2FtZS5tb2RlID09PSBcInZQbGF5ZXJcIikge1xuICAgIHZQbGF5KGUsIFwicGxheWVyVHdvXCIpO1xuICAgIGRvbVR1cm4oXCJwbGF5ZXJPbmVcIiwgZmFsc2UpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdlBsYXkoZSwgcGxheWVyKSB7XG4gIGlmIChnYW1lLmJvYXJkVHdvLmFsbFNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuZGF0YXNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IGluZGV4ID0gT2JqZWN0LnZhbHVlcyhlLnRhcmdldC5kYXRhc2V0KVswXS5zcGxpdChcIlwiKTtcbiAgICBnYW1lW3BsYXllcl0uYXR0YWNrKGluZGV4WzBdLCBpbmRleFsxXSk7XG4gICAgaWYgKGdhbWUuaXNPdmVyKCkpIHtcbiAgICAgIGRvbS5oYXNXb24oZ2FtZS53aW5uZXIoKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRvbVR1cm4ocGxheWVyLCBwMVR1cm4pIHtcbiAgaWYgKCFnYW1lLmlzT3ZlcigpKSB7XG4gICAgcDFUdXJuID09PSB0cnVlXG4gICAgICA/IGRvbS5wb3B1bGF0ZUJvYXJkKGdhbWUubG9nKCkpLnBsYXllck9uZVR1cm4oKVxuICAgICAgOiBkb20ucG9wdWxhdGVCb2FyZChnYW1lLmxvZygpKS5wbGF5ZXJUd29UdXJuKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbHNzKFwiaGlkZGVuXCIpLmFkZFRvKGJvYXJkT25lLCBib2FyZFR3byk7XG4gICAgfSwgMjAwKTtcbiAgICBkb20uY29udGludWVHYW1lKFxuICAgICAgYFBsYXllciAke2dhbWVbcGxheWVyXS5uYW1lfSwgY2xpY2sgdG8gY29udGludWVgLFxuICAgICAgYCR7Z2FtZVtwbGF5ZXJdLm5hbWV9YFxuICAgICk7XG4gIH1cbn1cblxuLy8vLy8gcGljayB1cCBzaGlwXG5jb25zdCBzaGlweWFyZCA9IHFzZWxhKFwiLnNoaXBDb250YWluZXJcIik7XG5zaGlweWFyZC5mb3JFYWNoKChzaGlweWFyZCkgPT4ge1xuICBzaGlweWFyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImhvbGRcIik7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibGVuZ3RoXCIsIGAke2UudGFyZ2V0LmRhdGFzZXRbXCJsZW5ndGhcIl19YCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic2hpcElEXCIsIGAke2UudGFyZ2V0LmlkfWApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpKTtcbiAgICB9XG4gICAgc2hpcHlhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5kcmFnZ2FibGUgPT09IHRydWUpXG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvbGRcIiwgXCJpbnZpc2libGVcIiwgXCJ4XCIsIFwieVwiKSxcbiAgICAgICAgICA1MFxuICAgICAgICApO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLy8vLyBwbGFjZSBzaGlwXG5mdW5jdGlvbiB3aGljaEJvYXJkKCkge1xuICBpZiAocXNlbChcIiNib2FyZFR3b1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xuICAgIHJldHVybiBcImJvYXJkT25lXCI7XG4gIH0gZWxzZSByZXR1cm4gXCJib2FyZFR3b1wiO1xufVxuZnVuY3Rpb24gd2hpY2hQbGF5ZXIoKSB7XG4gIGlmICh3aGljaEJvYXJkKCkgPT09IFwiYm9hcmRUd29cIikge1xuICAgIHJldHVybiBcInBsYXllclR3b1wiO1xuICB9IGVsc2UgcmV0dXJuIFwicGxheWVyT25lXCI7XG59XG5cbmNvbnN0IGNlbGxDb250YWluZXIgPSBxc2VsYShcIi5ib2FyZFwiKTtcbmNlbGxDb250YWluZXIuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xuICAgIGRpc3BsYXlQbGFjZVZhbGlkaXR5KGUpO1xuICB9KTtcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImRyYWdvdmVyXCIsXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSxcbiAgICBkaXNwbGF5UGxhY2VWYWxpZGl0eShlKVxuICB9XG4gICk7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IGRlZmF1bHRDb2xvck9uTGVhdmUoZSkpO1xuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4gZHJvcHNoaXAoZSkpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGFjZVZhbGlkaXR5KGUpIHtcbiAgbGV0IGJvYXJkID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICBpZiAoZS50YXJnZXQuZGF0YXNldC5pbmRleCAhPT0gdW5kZWZpbmVkICYmIGJvYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbGVuZ3RoID0gcXNlbChcIi5zaGlwLmhvbGQuaW52aXNpYmxlXCIpLmRhdGFzZXRbXCJsZW5ndGhcIl07XG4gICAgbGV0IGF4aXMgPSBxc2VsKFwiI2F4aXNCdG5cIikuY2xhc3NMaXN0WzBdO1xuICAgIGlmIChwcmVDaGVja1ZhbGlkaXR5KGUsIGxlbmd0aCkpIHtcbiAgICAgIGRvbS5kaXNwbGF5R2hvc3RTaGlwKFxuICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmluZGV4LFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGF4aXMsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBcInZhbGlkUGxhY2VcIlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmRpc3BsYXlHaG9zdFNoaXAoXG4gICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgYXhpcyxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIFwiaW52YWxpZFBsYWNlXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb2xvck9uTGVhdmUoZSkge1xuICBpZiAoZS50YXJnZXQuZGF0YXNldC5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcXNlbGEoXCIuY2VsbC5wbGFjZVwiKS5mb3JFYWNoKChlKSA9PlxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRQbGFjZVwiLCBcImludmFsaWRQbGFjZVwiLCBcInBsYWNlXCIpXG4gICAgKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiLCB3aGljaEJvYXJkKCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZUNoZWNrVmFsaWRpdHkoZXZlbnQsIGxlbmd0aCkge1xuICBsZXQgaW5kZXggPSBPYmplY3QudmFsdWVzKGV2ZW50LnRhcmdldC5kYXRhc2V0KVswXS5zcGxpdChcIlwiKTtcbiAgbGV0IGF4aXMgPSBxc2VsKFwiI2F4aXNCdG5cIikuY2xhc3NMaXN0WzBdO1xuICBsZXQgcGxhY2UgPSBbTnVtYmVyKGluZGV4WzBdKSwgTnVtYmVyKGluZGV4WzFdKSwgbGVuZ3RoLCBheGlzXTtcbiAgcmV0dXJuIGdhbWVbYCR7d2hpY2hQbGF5ZXIoKX1gXS5teUdhbWVib2FyZC5pc1ZhbGlkUGxhY2UoLi4ucGxhY2UpO1xufVxuXG5mdW5jdGlvbiBkcm9wc2hpcChlKSB7XG4gIGRlZmF1bHRDb2xvck9uTGVhdmUoZSkgXG4gIGlmIChlLnRhcmdldC5kYXRhc2V0LmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRQbGFjZVwiLCBcImludmFsaWRQbGFjZVwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiLCB3aGljaEJvYXJkKCkpO1xuICAgIGxldCBpbmRleCA9IE9iamVjdC52YWx1ZXMoZS50YXJnZXQuZGF0YXNldClbMF0uc3BsaXQoXCJcIik7XG4gICAgbGV0IGF4aXMgPSBxc2VsKFwiI2F4aXNCdG5cIikuY2xhc3NMaXN0WzBdO1xuICAgIGxldCBsZW5ndGggPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwibGVuZ3RoXCIpO1xuICAgIGxldCBzaGlwID0gcXNlbChgIyR7ZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBJRFwiKX1gKTtcbiAgICBsZXQgcGxhY2UgPSBbTnVtYmVyKGluZGV4WzBdKSwgTnVtYmVyKGluZGV4WzFdKSwgbGVuZ3RoLCBheGlzXTtcbiAgICBpZiAoZ2FtZVt3aGljaFBsYXllcigpXS5teUdhbWVib2FyZC5pc1ZhbGlkUGxhY2UoLi4ucGxhY2UpKSB7XG4gICAgICBnYW1lW3doaWNoUGxheWVyKCldLnBsYWNlU2hpcCguLi5wbGFjZSk7XG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9sZFwiLCBcImludmlzaWJsZVwiKTtcbiAgICAgIHNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZG9tLnBvcHVsYXRlQm9hcmQoZ2FtZS5sb2coKSkuYWxsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxucXNlbChcIiNheGlzQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4XCIpXG4gICAgPyBlLnRhcmdldC5jbGFzc0xpc3QucmVwbGFjZShcInhcIiwgXCJ5XCIpXG4gICAgOiBlLnRhcmdldC5jbGFzc0xpc3QucmVwbGFjZShcInlcIiwgXCJ4XCIpO1xuICBxc2VsYShcIi5zbGlkZVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaWQgPT09IGUudGFyZ2V0LmNsYXNzTGlzdFswXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRcIik7XG4gICAgfSBlbHNlIGl0ZW0uY2xhc3NMaXN0LmFkZChcIm91dFwiKTtcbiAgfSk7XG59KTtcblxuLy8gcXNlbChcIiNleHRyZW1pbmF0dXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4vLyAgIGZvciAobGV0IGEgPSAwOyBhIDw9IDk7IGErKykge1xuLy8gICAgIGZvciAobGV0IGIgPSAwOyBiIDw9IDk7IGIrKykge1xuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgIGdhbWUucGxheWVyVHdvLmF0dGFjayhhLCBiKTtcbi8vICAgICAgIH0sIDIwMCk7XG4vLyAgICAgICBkb20ucG9wdWxhdGVCb2FyZChnYW1lLmxvZygpKS5hbGwoKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9