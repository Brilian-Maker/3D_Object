function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(150);
 
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);
 
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.02);
 
  push();
  fill('lightgreen');
  box(100, 200, 100);
  pop();
 
  push();
  translate(0, -110, 0); 
  fill(255, 0, 0);
  cylinder(9, 90); 
  pop();
}