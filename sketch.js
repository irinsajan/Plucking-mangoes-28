const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree;
var boyImage, treeImage;

var sling, ground;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var stone;

function preload(){

	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(950,200);
	mango2 = new Mango(950,100);
	mango3 = new Mango(1000,150);
	mango4 = new Mango(1100,250);
	mango5 = new Mango(875,200);
	mango6 = new Mango(800,250);
	mango7 = new Mango(850,125);

	stone = new Stone(150,400);

	sling = new SlingShot(stone.body,{x:150,y:450});	

	ground = new Ground(width/2,height-5,width,10);  
}


function draw() {
  
  background(220);

  image(boyImage,115,365,200,300);
  image(treeImage,650,50,500,500);

  Engine.update(engine);

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  sling.display();

  detectHit(stone,mango1);
  detectHit(stone,mango2);
  detectHit(stone,mango3);
  detectHit(stone,mango4);
  detectHit(stone,mango5);
  detectHit(stone,mango6);
  detectHit(stone,mango7);
//console.log(stone);
  
  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectHit(object1,object2){
	var distance = dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y);
	var rad12 = object1.body.circleRadius+object2.body.circleRadius;
	//console.log(distance);
	//console.log(rad12);
	if (distance<=rad12){
		Body.setStatic(object2.body,false);
	}

}

function keyPressed(){
	if (keyCode === 32){
		sling.attach(stone.body);
		Body.setPosition(stone.body,{x: 150, y:400});
	}
}



