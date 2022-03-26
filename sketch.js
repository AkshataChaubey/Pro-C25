const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftSide, rightSide;
var world;
var radius = 70;
var dustbin, dustbinImage;
var paper, paperImage;

function preload() {
  //find the bug in the below code
  dustbinImage = loadImage("dustbin.png");
  paperImage = loadImage("paper.png");
}

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    density: 0.4,
  };

  ball = Bodies.circle(260, 100, radius / 2.6, ball_options);
  World.add(world, ball);

  ground = new Ground(width / 2, 670, width, 20);


  Engine.run(engine);

  rectMode(CENTER);
  ellipse(RADIUS);
}

function draw() {
  background(200);
  Engine.update(engine);

  imageMode(CENTER);
  // ellipse(paper.position.x,paper.position.y,50);
  image(paperImage, 30, 640, 50, 50);

  image(dustbinImage, 1175, 570, 180, 180);

  ground.display();
  leftSide. display();
  rightSide.display();
  bottomSide.display();

drawSprites()
 
}
function keyPressedOver() {
  if (keyCode === UP_ARROW) {
  //Matter.Body.applyForce(body, position, force)
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  }



}
