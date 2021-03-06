const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//var img;

var bg, ground, bground;
var form;

var star, play, start;

var playerAnime, player;

var font1;

var screw, screwdriver, fuel, oxygen, wings, thruster, stand;
var screwImg, driverImg, fuelImg, oxygenImg, wingsImg, thrusterImg;

var gameState = 0;

function preload() {
  playerAnime = loadAnimation("./anime/30.png", "./anime/31.png", "./anime/32.png", "./anime/33.png", "./anime/34.png",
   "./anime/35.png", "./anime/36.png", "./anime/37.png", "./anime/38.png", "./anime/39.png", "./anime/40.png",
    "./anime/41.png", "./anime/42.png");

  bg = loadImage("./images/ground.png");
  
  bground = loadImage("./images/backgro.jpg");

  star = loadImage("./images/start12.png");
  play = loadImage("./images/play3.png");

  font1 = loadFont("./Abril.ttf");

  screwImg = loadImage("./images/screw.png");
  driverImg = loadImage("./images/screwdriver.png");
  fuelImg = loadImage("./images/fuel.png");
  oxygenImg = loadImage("./images/oxygen.png");
  wingsImg = loadImage("./images/wings.png");
  thrusterImg = loadImage("./images/thruster.png");
}

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  
  ground = createSprite(displayWidth/2,displayHeight/2, displayWidth, displayHeight);

  start = createSprite(displayWidth/2-90, 100, 1, 2);

  player = createSprite(displayWidth/2-380, displayHeight/2-50, 30, 60);
  player.addAnimation("playerImage", playerAnime);
 
  engine = Engine.create();
  world = engine.world;

}
function draw() {
  background(bground);  
  
  Engine.update(engine);
 
  if(gameState === 0){
    form = new Form();
    form.display();
    start.addImage("start", star);
  }

  if(gameState === 1){
    form.hide();
    start.Visibility = 0;
    begin();
  }

  console.log(gameState);

  drawSprites();
}

function spawnParts() {
if(frameCount % 50 === 0){
   var rand = Math.round(random(1, 7));
   switch(rand){
     case 1: screwdriver();
             break;
     case 2: screw();
             break;
     case 3: fuel();
             break;
     case 4: oxygen();
             break;
     case 5: wings();
             break;
     case 6: thruster();
             break;
     case 7: stand();
     default: break;
   }
}
}

function screwdriver() {
  if(frameCount % 1500 === 0){
  screwdriver = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  screwdriver.x = Math.round(random(0, displayWidth));
  screwdriver.addImage("screwdriver", driverImg);
  screwdriver.velocityX = -5;

  if(screwdriver.isTouching(player.body)){
    screwdriver.destroy();
    screwdriver.lifetime = 0;
  }
  }
}

function screw() {
  if(frameCount % 35 === 0){
  screw = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  screw.addImage("screw", screwImg);

  if(screw.isTouching(player.body)){
    screw.destroy();
  }
}
}

function fuel() {
  if(frameCount % 45 === 0){
  fuel = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  fuel.addImage("fuel", fuelImg);

  if(fuel.isTouching(player.body)){
    fuel.destroy();
  }
 }
}

function oxygen() {
  if(frameCount % 55 === 0){
  oxygen = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  oxygen.addImage("oxygen", oxygenImg);

  if(oxygen.isTouching(player.body)){
    oxygen.destroy();
  }
 }
}

function wings() {
  if(frameCount % 65 === 0){
  wings = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  wings.addImage("wings", wingsImg);

  if(wings.isTouching(player.body)){
    wings.destroy();
  }
 }
}

function thruster() {
  if(frameCount % 65 === 0){
  thruster = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  thruster.addImage("thruster", thrusterImg);

  if(thruster.isTouching(player.body)){
    thruster.destroy();
  }
 }
}

function stand() {
  if(frameCount % 65 === 0){
  stand = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  stand.addImage("stand", standImg);

  if(stand.isTouching(player.body)){
    stand.destroy();
    stand.lifetime = 0;
  }
}
}

function begin() {
  

  spawnParts();

  ground.addImage(bg, displayWidth/2, 300, displayWidth, 500);
  ground.velocityX = -15;

  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
}
