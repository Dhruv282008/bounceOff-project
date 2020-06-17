var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,60,70);
  object1.shapeColor = "red";
  object2 = createSprite(100,400,65,70);
  object2.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityY = +6;
  object2.velocityY = -6;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bounceOff(object1,object2);
  //bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
}