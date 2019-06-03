import gameInput = require("./gameInput");

export enum keys {
  Default,
  Down,
  Left,
  Up,
  Right
}

export enum keyCodes {
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight"
}

let inputKey : string = "";

export function getInputKey() : keys {
  if (inputKey == keyCodes.ArrowDown) return keys.Down;
  if (inputKey == keyCodes.ArrowLeft) return keys.Left;
  if (inputKey == keyCodes.ArrowUp) return keys.Up;
  if (inputKey == keyCodes.ArrowRight) return keys.Right;
  return keys.Default;
}

document.onkeydown = function(e) {
  inputKey = e.key;
}

export function linkInput(_inputkey : keyCodes) {
  inputKey = _inputkey;
}

export function ClearInput() {
  inputKey = "";
}

