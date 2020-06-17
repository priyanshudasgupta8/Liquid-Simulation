// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];

var ground;

function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  boundaries.push(new Boundary(270, 200, width * 0.3, 20, PI / 2.5));
  boundaries.push(new Boundary(430, 200, width * 0.3, 20, PI / -2.5));
  boundaries.push(new Boundary(393, 400, width * 0.2, 20, PI / 4));
  boundaries.push(new Boundary(307, 400, width * 0.2, 20, PI / -4));
  boundaries.push(new Boundary(75 , 550, width * 0.6, 20, PI / 2.5));
  boundaries.push(new Boundary(625, 550, width * 0.6, 20, PI / -2.5));
}

// function mouseDragged() {
//   circles.push(new Circle(mouseX, mouseY, random(5, 10)));
// }

function draw() {
  background(51);
  circles.push(new Circle(350, 50, random(2.5, 10)));
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

  //console.log(circles.length, world.bodies.length);


}
