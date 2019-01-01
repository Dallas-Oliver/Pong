let leftPaddle;
let rightPaddle;
let ball;
let randYDir = Math.random() <= 0.5 ? (Math.random() * 5) + 2 : (Math.random() * -3.5) + 2;
let leftScore = 0;
let rightScore = 0;

let btn = document.createElement('BUTTON');
let strt = document.createTextNode('Start');
btn.appendChild(strt);
document.getElementById('bod');
bod.appendChild(btn);

function setup() {
  createCanvas(600, 500);

  //INSTANTIATIONS
  leftPaddle = new Paddle(15);
  rightPaddle = new Paddle(width - 15);
  ball = new Ball(width / 2, height / 2);

}

function draw() {
  background(45);

  // BOARD DESIGN

  noFill();
  stroke(125);
  strokeWeight(4);
  ellipse(width / 2, height / 2, 100, 100);

  stroke(125);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);


  //PADDLE FUNCTIONS

  leftPaddle.show();
  rightPaddle.show();
  move();

  //BALL FUNCTIONS

  ball.exist();
  ball.edges();
  ball.reset();
  ball.movement();
  ball.checkPaddleLeft(leftPaddle);
  ball.checkPaddleRight(rightPaddle);

  fill(255);
  textSize(32);
  text(leftScore, 32, 40);
  text(rightScore, width - 64, 40);
}

btn.onclick = function () {
  if (ball.dx == null || ball.dx == 0) {
    ball.dx = Math.random() < 0.5 ? 5 : -5;
    ball.dy = randYDir;
    strt.nodeValue = 'Restart';



  } else if (ball.dx !== null) {
    ball.x = width / 2;
    ball.y = height / 2;
    ball.dx = 0;
    ball.dy = 0;
    strt.nodeValue = 'Start';
    leftScore = 0;
    rightScore = 0;
    leftPaddle.y = height / 2;
    rightPaddle.y = height / 2;
  }

}

function move() {
  if (keyIsDown(90)) {
    leftPaddle.y += 10;
  }

  if (keyIsDown(65)) {
    leftPaddle.y -= 10;
  }

  if (keyIsDown(76)) {
    rightPaddle.y += 10;
  }

  if (keyIsDown(80)) {
    rightPaddle.y -= 10;
  }
}









