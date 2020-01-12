class SquereBrush extends Brush {
  name = 'squere'

  constructor() {
    super();
  }

  draw(x, y, size, color) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.rect(x, y, size, size);
    this.ctx.fill();
  }
}