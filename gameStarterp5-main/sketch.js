var  ball,wall1,wall2,pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10,ob1,ob2,line1;
function preload() {
 
}

function setup() {
 createCanvas(600,750)

 line1 = createSprite(300,3,380,5)
 
ball = createSprite(300,680,20,20)
wall1 = createSprite(120,375,20,750)
wall2 = createSprite(480,375,20,750)
pin1 = createSprite(230,30,30,30)
pin2 = createSprite(280,30,30,30)
pin3 = createSprite(330,30,30,30)
pin4 = createSprite(380,30,30,30)

pin5 = createSprite(355,75,30,30)
pin6 = createSprite(305,75,30,30)
pin7 = createSprite(255,75,30,30)

pin8 = createSprite(280,120,30,30)
pin9 = createSprite(330,120,30,30)

pin10 = createSprite(305,165,30,30)

ob1 = createSprite(145,490,20,20)
ob2 = createSprite(455,350,20,20)

 

ob1.velocityX = +2;
ob2.velocityX = -2;



}
function draw() {
  background(0);
  ob1.bounceOff(wall1)
 ob1.bounceOff(wall2)
 ob2.bounceOff(wall1)
 ob2.bounceOff(wall2)
 
  fill("white")
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  drawSprites();
   
  if(keyDown("space")){
    ball.velocityY = random(-10,-1)
  }

}
