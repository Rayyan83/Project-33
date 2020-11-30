var particles[];
var divisions[];
var plinkos[];

var divisionHeight = 300;
var ground,division;



function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(300,400,20,30);




}

function draw() {
  background(255,255,255);  

 ground.display();
 division.display();

  drawSprites();
}