var ship,sea,shipImage
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(2000,2000);
  sea=createSprite(100,450,100,10)
  sea.addImage(seaImage)
  sea.velocityX=-2
ship=createSprite(300,100,10,10)
ship.addAnimation("ship",shipImage)
ship.scale=0.5
}

function draw() {

  background("blue");
  if (sea.x<0){
  sea.x=100
  }
 drawSprites()
}