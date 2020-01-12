class Brush {
  constructor() {
  }

  draw(x, y, size, color) {
    throw new Error('draw not implemented!')
  }

  setCtx(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error('ctx is not canvas 2d rendering context')
    }
    this.ctx = ctx;
  }
}