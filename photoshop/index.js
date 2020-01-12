document.addEventListener('DOMContentLoaded', appStart)
document.addEventListener('resize', () => {
  document.querySelector('#myCanvas').width = window.innerWidth;
})

function createColorList(colors, photoshop) {

  const colorList = document.querySelector("#colorList")
  colors.forEach(color => {
    const col = document.createElement("ion-col")
    // col.setAttribute("tappable", true)
    col.style = `background-color: ${color}; height: 35px`;
    col.onclick = (e) => photoshop.setBrushColor(color);
    colorList.appendChild(col)
  });
} 

function appStart() {
  const myPS = new Photoshop(document.querySelector('#myCanvas'))
  myPS.setBrush(new SquereBrush());
  myPS.setBrushSize(5);

  const colors = [
    "#3880ff",
    "#0cd1e8",
    "#7044ff",
    "#10dc60",
    "#ffce00",

  ]
  createColorList(colors, myPS);
  myPS.setBrushColor(colors[0])
  myPS.drawImage()

  document
  .querySelector('#brushRange')
  .addEventListener('ionChange', (e) => myPS.setBrushSize(e.target.value))
  //myPS.drawImage()

  document
    .querySelector('#brightnessRange')
    .addEventListener('ionChange', (e) => myPS.setBrightness(e.target.value))
  
  document
    .querySelector('#contrastRange')
    .addEventListener('ionChange', (e) => myPS.setContrast(e.target.value))

  document
    .querySelector('#saturationRange')
    .addEventListener('ionChange', (e) => myPS.setSaturation(e.target.value))
  

  document
    .querySelector('#squareButton')
    .addEventListener('click', () => {
      myPS.setBrush(new SquereBrush())
    })
  document
    .querySelector('#circleButton')
    .addEventListener('click', () => {
      myPS.setBrush(new CircleBrush())
    })
}