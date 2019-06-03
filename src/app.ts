import snakeGame = require("./snakeGame");

// ロード時に自動実行
window.onload = function() {

  // ゲーム画面のサイズを設定
  let windowWidth :number = window.innerWidth;
  let windowHeight :number = window.innerHeight;

  // ゲーム画面を横幅に合わせて自動調整
  if(windowWidth * 1.3 > windowHeight) {windowWidth = windowHeight / 1.3};

  // ゲーム画面を描写するDOMを設定
  let gameArea :HTMLElement|null = document.getElementById('gameArea');

　//DOMが見つからない場合はゲームを呼び出さない
  if(gameArea != null) snakeGame.init(8, 8  , windowWidth, gameArea as HTMLElement);
};