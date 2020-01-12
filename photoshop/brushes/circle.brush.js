class CircleBrush extends Brush {
  name = 'circle';

  constructor() {
    super();
  }

  draw(x, y, size, color) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, size/2, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}