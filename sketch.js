const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine 
var world 

var snowArry=[]


var snowCity
var snowCityImg
var snowBoy
var snowBoyImg

function preload(){
snowCityImg=loadImage("snow2.jpg")

}





function setup() {
  createCanvas(800,400);
  snowBoy=createSprite(400, 200, 50, 50);

  engine=Engine.create()
  world=engine.world 



}

function draw() {
  background(snowCityImg);  

 Engine.update(engine)





  if(keyDown(LEFT_ARROW)){
    snowBoy.velocityX=-2
  }

  if(keyDown(RIGHT_ARROW)){
    snowBoy.velocityX=2
  }

  
  if(frameCount%20===0){ 
    snow1=new Snow(random(10,width-10),random(10,50),60) ;
    console.log(snow1) ;
    snowArry.push(snow1); } 
    for(var i=0;i<snowArry.length;i++);
    { snowArry[i].display() ;
    } 
  
  
  
  
  
      
    



  drawSprites();
}