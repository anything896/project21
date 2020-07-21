var bullet,wall;
var speed,weight;
var hight,thickness;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50)
  bullet.shapeColor=color(255)
  bullet.velocityX=speed
 wall= createSprite(1100, 200);
 wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
 
 
 
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0 
    var dfarmation=0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if (dfarmation>12){
      bullet.shapeColor=color(0,255,0);
    }
    if (dfarmation<12) {
      bullet.shapeColor=color(255,0,0);
    }
        }     


  drawSprites();
}
