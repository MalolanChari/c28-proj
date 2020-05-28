const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var PLAY=1;

var END=0;

var ground,trash,backgroundImg,papper,slinshot;


function preload(){

  backgroundImg= loadImage("office.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
  

    trash=new Trash(1000,350)

    ground = new Ground(600,height,1200,20)

    papper =new Paper(100,10)

    slinshot= new Slingshot(papper.body,{x:250,y:60})

}

function draw(){
    background(backgroundImg);
   
    
    Engine.update(engine);
    
    trash.display();

    slinshot.display();

    papper.display();

    ground.display();

    

    textSize(20);
    text("BE A GOOD CITIZEN AND TRASH",183,380);
   
    if(papper.x<900){
      textSize(20);
      text("O NO THE TRASH IS FULL SO PLEASE CHANGE IT",200,200); 

    }
}


function mouseDragged(){
  Matter.Body.setPosition(papper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slinshot.fly();
}