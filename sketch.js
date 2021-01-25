  var car,wall;
  var speed,weight;
  
  
  function setup() {
    createCanvas(1600,400)

    speed=random(55,90);
    weight=random(400,1500)
  wall=createSprite(1500,200,60,200);
  wall.shapeColor= color(80,80,80)
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(255)
  car.velocityX = speed;
}

function draw() {
  background(0);  
  drawSprites();

  if(wall.x - car.x < car.width/2 + wall.width/2)
  {
 car.velocityX=0;
var deformation = 0.5*speed*weight*speed/22509;
    if(deformation<80)
{
car.shapeColor = color("green")
}
if(deformation>100 && deformation<180)
{

  car.shapeColor = color("yellow")

}

if(deformation>180)
{

  car.shapeColor = color("red")
}
  }
}