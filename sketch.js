var player,  stack,  coin,  rb,  gb,  zombie, obstacle, bg, invisible, invisible2, invisible3, smoke ;
var playerImg, stackImg, coinImg, rbImg, gbImg, zombieImg,obstacleImg, bgImg, smokeImg;
var tplayer;
var tImg;
var transparency = 5;

function preload(){
 playerImg = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png", "images/boy6.png", "images/boy7.png","images/boy8.png");
 coinImg = loadAnimation("images/coin1.png", "images/coin2.png", "images/coin3.png", "images/coin4.png", "images/coin5.png","images/coin6.png", "images/coin7.png", "images/coin8.png", "images/coin9.png", "images/coin10.png");
 tImg = loadAnimation("images/t1.png","images/t2.png","images/t3.png","images/t4.png","images/t5.png","images/t6.png","images/t7.png","images/t8.png");

 stackImg = loadImage("images/bstone.png");
 rbImg = loadImage("images/red booster.png");
 gbImg = loadImage("images/green booster.png");
 zombieImg = loadImage("images/zombie.png");
 obstacleImg = loadImage("images/obstacle.png");
 bgImg = loadImage("images/bg.jpeg");
 smokeImg = loadImage("images/smoke1.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  
  bg = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight );
  bg.addImage("bg", bgImg);
  bg.scale = 1.34;
  //bg.velocity.y = 3;
  

  player = createSprite(displayWidth/2+2, displayHeight/2+20, 50, 50);
  player.addAnimation("plr", playerImg);

  invisible = createSprite(displayWidth/2+2, displayHeight/2+30, displayWidth, 10);
  invisible.visible = false;

  tplayer = createSprite(player.x, player.y, 50, 50);
  tplayer.addAnimation("t",tImg);
  tplayer.visible = false;

  invisible2 = createSprite(displayWidth/2+2, displayHeight/2- 400, displayWidth, 3 );
  invisible2.visible = false;


}

function draw() {
  background("violet"); 

  if(player.y < displayHeight - 30){
  
  camera.position.x = displayWidth/2;
  camera.position.y = player.y;

  }

  tplayer.x = player.x;
  tplayer.y = player.y;


  //if (bg.y > 450){
    //bg.y = 300;
  //}

  if(keyDown("space" )) {
    player.velocityY = -10;
  }

  if(transparency > 0 && transparency <= 5){

  if(keyDown("k")){
    player.visible = false;
    tplayer.visible = true;
  }

  if(keyWentUp("k")){
    player.visible = true;
    tplayer.visible = false;
    transparency = transparency - 1;
  }

}

spawncoin();
  
    player.velocityY = player.velocityY + 0.8 
    player.collide(invisible);
    player.collide(invisible2);


    textSize(30);
    fill("black");
    
console.log(player.x);
  drawSprites();

  text("score :" , displayWidth/2 - 500, displayHeight/2 -350);
  text("transparency :" + transparency, displayWidth/2 - 500, displayHeight/2 -300 )
}

function keyPressed () {

  if(player.x <= displayWidth - 500) {


  if (keyCode === RIGHT_ARROW) {
    player.x = player.x + 330;
  }
}

if(player.x >= displayWidth - 900) {

  if (keyCode === LEFT_ARROW) {
    player.x = player.x - 350;
  }

  }
  
  }

  
function spawncoin (){
  if (frameCount % 80 === 0) {
  var coin = createSprite(displayWidth/2, -80, 20,20);
  coin.addAnimation("coin",coinImg);
  coin.x = Math.round(random(displayWidth-1000, displayWidth-300));
  coin.velocityY = 3;
  coin.scale = 0.3;
  coin.depth = player.depth-1;
}
}  
