var box;
function setup() {
  createCanvas(400,400);
  createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW))
  {
  background('red');
  }
drawSprites();
}




