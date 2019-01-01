

function Paddle(x) {
  this.x = x;
  this.y = height / 2;
  this.h = 85;
  this.w = 5;

  this.show = function () {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
