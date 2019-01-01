
class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = null;
    this.dy = null /*random() <= 0.5 ? 3 : -3*/;
    this.radius = 12;
  }


  checkPaddleLeft(p) {
    if (this.y - this.radius < p.y + p.h / 2 &&
      this.y + this.radius > p.y - p.h / 2 &&
      this.x - this.radius < p.x + p.w / 2) {

      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.dx = 5 * cos(angle);
        this.dy = 5 * sin(angle);
        this.x = p.x + (p.w / 2) + this.radius;
      }

    }
  }
  checkPaddleRight(p) {
    if (this.y - this.radius < p.y + p.h / 2 &&
      this.y + this.radius > p.y - p.h / 2 &&
      this.x + this.radius > p.x - p.w / 2) {

      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.dx = 5 * cos(angle);
        this.dy = 5 * sin(angle);
        this.x = p.x - (p.w / 2) - this.radius;
      }
    }
  }


  reset() {
    if (this.x > width) {
      this.x = width / 2;
      this.y = height / 2;
      this.dx = Math.random() <= 0.5 ? 5 : -5;
      this.dy = Math.random() <= 0.5 ? (Math.random() * 5) + 2 : (Math.random() * -5) + 2;
      leftScore++;
    } else if (this.x < 0) {
      this.x = width / 2;
      this.y = height / 2;
      this.dx = Math.random() <= 0.5 ? 5 : -5;
      this.dy = Math.random() <= 0.5 ? (Math.random() * 5) + 2 : (Math.random() * -5) + 2;
      rightScore++;
    }

  }


  edges() {
    if (this.y > height) {
      this.dy *= -1;
    }

    if (this.y < 0) {
      this.dy *= -1;
    }
  }



  exist() {
    fill(20, 240, 200);
    noStroke();
    strokeWeight(1);
    ellipse(this.x, this.y, 24, 24);
  }

  movement() {
    this.x += this.dx;
    this.y += this.dy;
  }

}