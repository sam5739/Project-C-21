
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftObj;
var rightObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    
    var ball_options = {
      isStatic: false,
	  restitution: 0.3,
	  friction: 0,
	  density: 0.1
	}

    ball = Bodies.circle(100, 50, 10, ball_options);
	World.add(world, ball);
    
    groundObj = new ground(width/2, 389, width, 20);
	leftObj = new ground(400, 314, 20,130);
	rightObj = new ground(600, 314, 20,130);
	
	Engine.run(engine);
  
}


function draw() {

  edges = createEdgeSprites();
  ball.bounceOff(edges);
	  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  groundObj.show();
  leftObj.show();
  rightObj.show();
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 10);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
	}
}

