var canvas;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  canvas.style( 'z -index', '-1');
  strokeWeight (10);
  stroke(0);
}

function touchMoved() {
line (mouseX, mouseY, pmouseX, pmouseY);
return false;
}
