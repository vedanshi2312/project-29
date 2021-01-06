const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var SlingShot,ground


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //create bodies here
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    ground = new Ground(600,height,1200,20);
    block1 = block(330,225,30,40);
    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
