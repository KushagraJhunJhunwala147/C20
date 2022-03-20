
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var rock_options = {
    restitution: 0.95,
    frictionAir:0.01
   }
  rock = Bodies.circle(300,20,10,rock_options)
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  wall = Bodies.rectangle(300,200,400,20,ground_options);
  World.add(world,ground);
  World.add(world,rock);
  World.add(world,wall);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,10);
  rect(wall.position.x,wall.position.y,400,20);
}

