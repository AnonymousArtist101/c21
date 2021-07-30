const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottom_wall;
var top_wall;
var left_wall;
var right_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  bottom_wall = new Ground(200, 390, 400, 20);
  top_wall = new Ground(200, 10, 400, 20);
  left_wall = new Ground(10, 200, 20, 400);
  right_wall = new Ground(390, 200, 20, 400);

  var ball_options ={
    restitution: 1.0
  }
  ball = Bodies.circle(200, 200, 20);
  World.add(world, ball);

button1 = createImg('right.png');
button1.position(220, 30);
button1.size(50, 50);
button1.mouseClicked(hForce);

button2 = createImg('up.png');
button2.position(20, 30);
button2.size(50, 50);
button2.mouseClicked(vForce);
  
}

function draw() 
{

  background(51);

  Engine.update(engine);

  bottom_wall.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();

  ellipseMode(RADIUS);

 ellipse(ball.position.x, ball.position.y, 20, 20);
}

function hForce() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0})
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05})
}