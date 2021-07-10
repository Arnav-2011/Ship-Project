var sea;
var seaImg;
var ship, shipmot;
var man;
var manimg;

function preload(){
   shipmot = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
   seaImg = loadImage("sea.png");
   manimg = loadImage("man.png");
   
}


function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  sea.scale = .25;
  sea.addImage(seaImg);
  sea.velocityX = -5;
  ship = createSprite(150,160);
  ship.scale = .4;
  ship.addAnimation("running", shipmot);
  man = createSprite(250,170)
  man.addImage(manimg)
  man.scale = .12;
  man.visible = false;
}

function draw() {
  background("blue");
  drawSprites();
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  if (keyDown("space")){
    man.visible = true;
  }
}

