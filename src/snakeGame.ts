import gIn = require("./gameInput");

// ゲームクラス定義

// マップ上の位置を定義
class mapPoint {
  public x : number;
  public y : number;
  constructor(x :number = 0, y :number = 0){
    this.x = x;
    this.y = y;
  }

}

// 蛇を定義
class snake {
  private body :mapPoint[];
  private eatFlag :boolean;

  constructor(x : number, y : number) {
    this.eatFlag = false;
    this.body = [new mapPoint(x, y)];
  }

  public getBodyParts(z : number){
    return this.body[z];
  }

  public getLength() {
    return this.body.length;
  }

  public move(x : number, y : number){
    // 頭を追加
    this.body.unshift(new mapPoint());
    this.body[0].x = x;
    this.body[0].y = y;
    // 餌を食べていなければ尻尾を削除
    if(this.eatFlag) {
      this.eatFlag = false;
    } else {
      this.body.pop();
    }
  }

  public eat(){
    this.eatFlag = true;
  }
}

// ゲーム画面を定義
class gameWindow {
  private gameErea :HTMLElement; //ボタンなどを含めたゲーム画面
  private svgArea : SVGElement; //SVGで描写するゲーム画面
  private mapX : number; //マップコマ数(横)
  private mapY : number; //マップコマ数(縦)
  private windowWidth : number; //ゲーム画面pixcelサイズ(横)
  private windowHeight : number; //ゲーム画面pixcelサイズ(縦)
  private boxSize : number; //マップコマの一辺pixcelサイズ

  boxMap : number[][];
  constructor(_x : number, _y : number, _width : number,  _gameArea : HTMLElement) {
    this.mapX = _x;
    this.mapY = _y;
    this.boxMap = new Array(this.mapX);
  
    for(let i : number = 0; i < this.mapX; i++) {
      this.boxMap[i] = new Array(this.mapY);
      for(let j : number = 0; j < this.mapY; j++) {
        this.boxMap[i][j] = 0;
      }
    }

    // ゲームマップを描写
    this.windowWidth = _width - (_width % this.mapX);
    this.windowHeight = this.windowWidth;

    this.boxSize = Math.floor(this.windowWidth / this.mapX);

    this.gameErea = _gameArea;
    this.svgArea =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svgArea.setAttribute("id", "svgArea");
    this.svgArea.setAttribute("style", "background-color:#ddd");
    this.svgArea.setAttribute("width", this.windowWidth.toString());
    this.svgArea.setAttribute("height", this.windowHeight.toString());
    this.gameErea.appendChild(this.svgArea);
    
    let text : SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.innerHTML = "Game Start";
    text.setAttribute("x", (this.windowWidth / 2).toString());
    text.setAttribute("y", (this.windowHeight / 2).toString());
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.setAttribute("font-size", "20px");
    text.addEventListener('click', () => {
      gameStart();
    }, false);

    this.svgArea.appendChild(text);
    
    // 操作ボタン部を描写
    let controlerArea :HTMLDivElement = document.createElement("div");

    let downButton :HTMLButtonElement = document.createElement("button");
    downButton.addEventListener('click', () => {
      gIn.linkInput(gIn.keyCodes.ArrowDown);
    }, false);
    downButton.innerText = "Down";

    let leftButton :HTMLButtonElement = document.createElement("button");
    leftButton.addEventListener('click', () => {
      gIn.linkInput(gIn.keyCodes.ArrowLeft);
    }, false);    
    leftButton.innerText = "Left";

    let upButton :HTMLButtonElement = document.createElement("button");
    upButton.addEventListener('click', () => {
      gIn.linkInput(gIn.keyCodes.ArrowUp);
    }, false);
    upButton.innerText = "Up";

    let rightButton :HTMLButtonElement = document.createElement("button");
    rightButton.addEventListener('click', () => {
      gIn.linkInput(gIn.keyCodes.ArrowRight);
    }, false);
    rightButton.innerText = "Right";

    controlerArea.appendChild(downButton);
    controlerArea.appendChild(leftButton);
    controlerArea.appendChild(upButton);
    controlerArea.appendChild(rightButton);

    controlerArea.querySelectorAll("button").forEach((_button) => {
      _button.setAttribute("style", "width:" + Math.floor(this.windowWidth / controlerArea.querySelectorAll("button").length).toString() + "px;"
       + "height:" + Math.floor(this.windowWidth * 0.2).toString() + "px;");
    });

    this.gameErea.appendChild(controlerArea);

  }

  get getMapX() {
    return this.mapX;
  }

  get getMapY() {
    return this.mapY;
  }

  public makeMap() {
    for(let i : number = 0; i < this.mapY; i++) {
      for(let j : number = 0; j < this.mapX; j++) {
        let box : SVGRectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        box.setAttribute("width", this.boxSize.toString());
        box.setAttribute("height", this.boxSize.toString());
        box.setAttribute("x", (j * this.boxSize).toString());
        box.setAttribute("y", (i * this.boxSize).toString());
        box.setAttribute("stroke", "black");
        box.setAttribute("fill", "#fff");
        box.setAttribute("strokestroke-width", "2");
        for(let k : number = 0; k < iSnake.getLength(); k++ ){
          let snakeBodyParts : mapPoint = iSnake.getBodyParts(k);
          if(i == snakeBodyParts.y && j == snakeBodyParts.x) {
            box.setAttribute("fill", "#111");
          }
        }
        for(let k : number = 0; k < iSnake.getLength(); k++ ){
          if(i == iFood.y && j == iFood.x) {
            box.setAttribute("fill", "#111");
          }
        }
        this.svgArea.appendChild(box); 
      }
    }
  }

  public drawMap() {
    let elementNum : number = 0;
    for(let i : number = 0; i < this.mapY; i++) {
      for(let j : number = 0; j < this.mapX; j++) {
        let box :SVGElement = this.svgArea.children[elementNum] as SVGElement;
        box.setAttribute("width", this.boxSize.toString());
        box.setAttribute("height", this.boxSize.toString());
        box.setAttribute("x", (j * this.boxSize).toString());
        box.setAttribute("y", (i * this.boxSize).toString());
        box.setAttribute("stroke", "black");
        box.setAttribute("fill", "#fff");
        box.setAttribute("strokestroke-width", "2");
        for(let k : number = 0; k < iSnake.getLength(); k++ ){
          let snakeBodyParts : mapPoint = iSnake.getBodyParts(k);
          if(i == snakeBodyParts.y && j == snakeBodyParts.x) {
            box.setAttribute("fill", "#111");
          }
        }
        for(let k : number = 0; k < iSnake.getLength(); k++ ){
          if(i == iFood.y && j == iFood.x) {
            box.setAttribute("fill", "#111");
          }
        }
        elementNum++; 
      }
    }
  }

  public deleteMap() {
    if(this.svgArea.firstChild) {
      this.svgArea.removeChild(this.svgArea.firstChild);
    } else {
      //全部削除し終わったら初期化
      clearInterval(gameMaster);
      let text : SVGTextElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.innerHTML = "蛇の長さ : " + iSnake.getLength().toString() + " Restart?";
      text.setAttribute("x", (this.windowWidth / 2).toString());
      text.setAttribute("y", (this.windowHeight / 2).toString());
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "central");
      text.setAttribute("font-size", "20px");
      text.addEventListener('click', () => {
        gameStart();
      }, false);

    this.svgArea.appendChild(text);
    }
  }
  
  public clearMap() {
    while(this.svgArea.firstChild) {
      this.svgArea.removeChild(this.svgArea.firstChild);
    }
  }
}


// 餌を撒く
function feedFood(_gameWindow :gameWindow, _snake:snake) :mapPoint {
  let mapPointArray : any = {};
  for(let i : number = 0; i < _gameWindow.getMapX; i++) {
    for(let j : number = 0; j < _gameWindow.getMapY; j++) {
      mapPointArray["x" + i.toString() + "y" + j.toString()] = {x:i, y:j};
    }
  }

  // 蛇の体分ループ
  for(let k : number = 0; k < _snake.getLength(); k++ ){
    let snakeBodyParts : mapPoint = _snake.getBodyParts(k);
    // 蛇の体があったら抜ける
    delete mapPointArray["x" + snakeBodyParts.x.toString() + "y" + snakeBodyParts.y.toString()];
  }

  // 蛇の体に一致しなかったマップからランダムで餌を配置するところを選ぶ
  let randomNum :number = Math.floor( Math.random() * (Object.keys(mapPointArray).length - 1) );
  let randomPoint = mapPointArray[Object.keys(mapPointArray)[randomNum]];
  return new mapPoint(randomPoint.x, randomPoint.y);
}


// ゲーム制御

let gameMaster :number; //イベントタイマー
let iGameWindow :gameWindow; //ゲームマップ
let iSnake :snake; //ヘビ
let iFood :mapPoint;

function gameStart() {
  gIn.ClearInput();
  iSnake = new snake(0, 0);
  iFood = feedFood(iGameWindow, iSnake);
  iGameWindow.clearMap();
  iGameWindow.makeMap();
  clearInterval(gameMaster);
  gameMaster = window.setInterval(() => gameTick(), 300);
}

function gameTick() {
  // 蛇の動く先計算
  let headPoint : mapPoint = iSnake.getBodyParts(0);
  let movePoint : mapPoint = new mapPoint(headPoint.x + 1, headPoint.y);
  if(gIn.getInputKey() == gIn.keys.Down) movePoint = new mapPoint(headPoint.x, headPoint.y + 1);
  if(gIn.getInputKey() == gIn.keys.Left) movePoint = new mapPoint(headPoint.x - 1, headPoint.y);
  if(gIn.getInputKey() == gIn.keys.Up) movePoint = new mapPoint(headPoint.x, headPoint.y - 1);
  if(gIn.getInputKey() == gIn.keys.Right) movePoint = new mapPoint(headPoint.x + 1, headPoint.y);
  if(gIn.getInputKey() == gIn.keys.Default) movePoint = new mapPoint(headPoint.x, headPoint.y + 1);
  
  // 壁当たり判定
  if(movePoint.x >= iGameWindow.getMapX || movePoint.x < 0 ) gameEnd();
  if(movePoint.y >= iGameWindow.getMapY || movePoint.y < 0 ) gameEnd();
  
  // 自食判定
  for(let i : number = 0; i < iSnake.getLength() - 1; i++) {
    if(movePoint.x == iSnake.getBodyParts(i).x && movePoint.y == iSnake.getBodyParts(i).y) gameEnd();
  }

  // 蛇を動かす
  iSnake.move(movePoint.x, movePoint.y);

  // 餌食べ判定
  if(movePoint.x == iFood.x && movePoint.y == iFood.y) {
    iSnake.eat();
    iFood = feedFood(iGameWindow, iSnake);
  }

  // マップ描写
  iGameWindow.drawMap();
}

function gameEnd() {
  clearInterval(gameMaster);
  gameMaster = window.setInterval(() => iGameWindow.deleteMap(), 10);
}


// 初期化処理
export function init(_x :number, _y :number, _width :number, _gameArea :HTMLElement) {
  iGameWindow = new gameWindow(_x, _y, _width , _gameArea);
}
