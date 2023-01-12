
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var ground1,ground2,ground3,ground4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
 

 ground1=new Ground(50,370,50,30) ;
 ground2=new Ground(150,370,50,30) ;
 ground3=new Ground(250,370,50,30) ;
 ground4=new Ground(350,370,50,30) ;

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
 
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();

  ellipse(ball.position.x,ball.position.y,20);
  
//console.log(ground.position.y);

  
  
}


  