class Photoshop {
  constructor(targetElement) {
    if (!(targetElement instanceof HTMLCanvasElement)) {
      throw Error('targetElement is not html canvas');
    }
    this.canvas = targetElement;
    this.canvas.width = window.innerWidth - 10;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.addEventListener('touchmove', (e) => this.onTouchDraw(e))
    this.brightness = 1
    this.contrast = 0
    this.contrastIntercept = 0
    this.saturationMulti = 0
  }
  
  setBrush(brush) {
    if (!(brush instanceof Brush)) {
      throw Error('trying to set invalid brush!');
    }
    brush.setCtx(this.ctx)
    this.brush = brush
  }

  setBrushColor(color) {
    this.brushColor = color;
  }

  setBrushSize(size) {
    console.log(size)
    this.brushSize = size;
  }

  onTouchDraw(e) {
    const canvasPosition = this.canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - canvasPosition.x
    const y = e.touches[0].clientY - canvasPosition.y
    this.brush.draw(x, y, this.brushSize, this.brushColor)
  }

  drawImage() {
    const image = new Image()
    image.src = 'zdjecie.jpg'
    image.addEventListener('load', () => {
      this.ctx.drawImage(image, 0, 0)
      this.originalCanvasData = this.ctx.getImageData(0,0, this.canvas.width, this.canvas.height);
    })
  }

  setBrightness(value) {
    this.brightness = value/100
    this.redrawCanvas();
    // const canvasData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    // for( let i = 0; i < canvasData.data.length; i+=4) {
    //   canvasData.data[i] = this.sanitizeRGBData((canvasData.data[i] * brightness / 100))
    //   canvasData.data[i+1] = this.sanitizeRGBData((canvasData.data[i + 1] * brightness / 100))
    //   canvasData.data[i+2] = this.sanitizeRGBData((canvasData.data[i + 2] * brightness) / 100)
    // }

    // this.ctx.putImageData(canvasData, 0, 0)
  }

  setContrast(value) {
    this.contrast = (value/100) + 1
    this.contrastIntercept = 128 * (1 - this.contrast);
    this.redrawCanvas();
    // const canvasData = this.ctx.getImageData(0,0, this.canvas.width, this.canvas.height);
    // for( let i = 0; i < canvasData.data.length; i+=4) {
    //   canvasData.data[i] = canvasData.data[i] + intercept
    //   canvasData.data[i+1] = canvasData.data[i + 1] + intercept
    //   canvasData.data[i+2] = canvasData.data[i + 2] + intercept
    // }
    
    // this.ctx.putImageData(canvasData, 0, 0)
  }

  sanitizeRGB(value) {
    return Math.max(0, Math.min(value, 255))
  }

  setSaturation(value) {
    console.log(value);
    this.saturationMulti = Number(value)
    this.redrawCanvas();
  }

  calcSaturation(r,b) {
    return b-r/b
  }

  redrawCanvas() {
    const canvasData = this.ctx.getImageData(0,0, this.canvas.width, this.canvas.height)
    const constrast = (this.contrast === 0 && this.contrastIntercept === 0 ? 1 : this.contrast);
    const saturation = this.saturationMulti === 100 ? 0 : this.saturationMulti/100; 
    for( let i = 0; i < canvasData.data.length; i+=4) {
      const grey = (0.2989*this.originalCanvasData.data[i] + 0.5870*this.originalCanvasData.data[i+1] + 0.1140*this.originalCanvasData.data[i+2])
          
      canvasData.data[i] = this.sanitizeRGB(-grey * saturation + this.originalCanvasData.data[i] * this.brightness * (saturation + 1) * constrast + this.contrastIntercept)
      canvasData.data[i+1] = this.sanitizeRGB(-grey * saturation  + this.originalCanvasData.data[i + 1] * this.brightness * (saturation + 1) * constrast + this.contrastIntercept)
      canvasData.data[i+2] = this.sanitizeRGB(-grey * saturation  + this.originalCanvasData.data[i + 2] * this.brightness * (saturation + 1) * constrast + this.contrastIntercept)
    }
    this.ctx.putImageData(canvasData, 0, 0)
  }

  
 }