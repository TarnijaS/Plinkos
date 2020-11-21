const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  var canvas= createCanvas(480,800); 
  
  ground= new Plinko(0,height,800,0);
   
  for(var k=0; k<=width; k=k+8){
    divisions.push(new Divisions)(k,height,height*divisionHeight/2,10,divisionHeight)
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2*10),10,10));
  }

  for(var j=40;j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width-10;j=j+50);
  {
    plinkos.push(new Plinko(j,175));
  }
  for(var j=0;j<particles.lenghth; j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();
}