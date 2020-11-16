var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=true;
  
  Foodgroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background(155,155,155);
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  if(keyDown("space") && monkey.y>=100){
    monkey.velocityY = -12;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  monkey.collide(ground);
  
  ground.x=ground.width/2;
  score=survivalTime/10;
  
      
 
  
  drawSprites();   
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(300,300,0,0);
    banana.addImage("imagebanana",bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-5;
    banana.lifetime=600;
  }
  
  foodGroup.add(banana);
  
}

function obstacles(){
  if(frameCount%300){
    obstacle=createSprite(300,300,5,5);
    obstacle.addImage("obimage",obstaceImage);
    obstacle.velocityX=-5;
    obstacle.lifetime=600;
  }
  
  
}





