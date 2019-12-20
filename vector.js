class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get() {
    return new Vector(this.x, this.y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  mult(n) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  static mult(v1, v2) {
    return new Vector(v1.x * v2.x, v1.y * v2.y);
  }

  static multN(v1, n) {
    return new Vector(v1.x * n, v1.y * n);
  }

  div(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  static div(v1, v2) {
    return new Vector(v1.x / v2.x, v1.y / v2.y);
  }

  static divN(v1, n) {
    return new Vector(v1.x / n, v1.y / n);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magSq() {
    return this.x * this.x + this.y * this.y;
  }

  normalize() {
    var m = this.mag();
    if (m !== 0 && m !== 1) {
      this.div(m);
    }
  }

  limit(max) {
    if (this.magSq() > max * max) {
      this.normalize();
      this.mult(max);
    }
  }

  heading() {
    var angle = Math.atan2(-this.y, this.x);
    return -1 * angle;
  }

  static random2D() {
    return Vector.fromAngle(Math.random() * Math.TAU);
  }

  static fromAngle(angle) {
    return new Vector(Math.cos(angle), Math.sin(angle));
  }
}

export default Vector;
