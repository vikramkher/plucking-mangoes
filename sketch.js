
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, fly,chance=0;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var gameState = "onSling";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(200,400,50,50)
	mango1=new mango(1100,120,30);
    mango2=new mango(990,120,30);
    mango3=new mango(1170,130,30);
    mango4=new mango(1140,110,30);
    mango5=new mango(1130,140,30);
	fly=new Fly(stoneObj.body,{x:200,y:400})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();

  groundObject.display();
  collisionDetection(stoneObj,mango1);
  collisionDetection(stoneObj,mango2);
  collisionDetection(stoneObj,mango3);
  collisionDetection(stoneObj,mango4);
  collisionDetection(stoneObj,mango5);
/*if(collisionDetection(stoneObj,mango1)){
      Matter.Body.setStatic(mango1.body,false)
  }
if(collisionDetection(stoneObj,mango2)){
    Matter.Body.setStatic(mango2.body,false)
}
if(collisionDetection(stoneObj,mango3)){
    Matter.Body.setStatic(mango3.body,false)
}
if(collisionDetection(stoneObj,mango4)){
    Matter.Body.setStatic(mango4.body,false)
}
if(collisionDetection(stoneObj,mango5))
    Matter.Body.setStatic(mango5.body,false)
}*/
  
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    fly.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stoneObj.body,{x:200,y:400})
       fly.attach(stoneObj.body);
       chance++
       gameState="onSling"
    }
}


function detectollision(lstone,lmango){
     mangoBodyPosition=lmango.body.position;
     stoneBodyPosition=lstone.body.position;
     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 if(distance<=lmango.r+lstone.r) {
      Matter.Body.setStatic(lmango.body,false); 
    } 
}



