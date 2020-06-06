var ball,paddle;
var ballImage,paddleImage;
function preload() {
  
  ballImage = loadImage("ball.png");
  paddleImage=loadImage("paddle.png")
  
  
}
function setup() {
  createCanvas(400, 400);
   
  ball=createSprite(200,200,10,10);
  ball.addAnimation("alpha",ballImage);
  ball.VelocityY=9;
  
  paddle=createSprite(380,200,10,90);
  paddle.addAnimation("bravo",paddleImage);

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
edges=  createEdgeSprites();
  
 
  ball.bounceOff(edges[0]);

  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(RIGHT_ARROW)){
   ball.velocityX = 5;
  ball.velocityY = 4;
  }
 
  if(keyDown(UP_ARROW)&&(paddle.y>0) &&(paddle.y<400))
  {
     /* what should happen when you press the UP Arrow Key */paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW)&&(paddle.y>0) &&(paddle.y<400))
  {
    /* what should happen when you press the UP Arrow Key */paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
if(ball.bounceOff(paddle)){

ball.velocityY = random(1,8);

}
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

