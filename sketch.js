const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bo5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Bodies Here.
	

	bob1=new Bob(500,600,50);
	bob2=new Bob(390,600,50);
	bob3=new Bob(610,600,50);
	bob4=new Bob(280,600,50);
	bob5=new Bob(720,600,50);

	roof=new Roof(500,200,500,50);

	rope1=new Rope(bob1.body,roof.body,0,0);
	rope2=new Rope(bob2.body,roof.body-40,0);
	rope3=new Rope(bob3.body,roof.body,40,0);
	rope4=new Rope(bob4.body,roof.body,-80,0);
	rope5=new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
	Keypressed();

  drawSprites();
 
}

function Keypressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(bob1.body,bob5.body.position,{x:-20,y:-20})
	}
}