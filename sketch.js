var background;
var Canvas;
var Obstacle;
var player, winnerPlayer;
var Nuts, moreNuts , score;
var BackgroundImage, nutsImage, moreNutsImage, player1Image,
    winnerPlayer1Img, obstacleImg;
var player, playerCount, allPlayers, form;
var gameState = 1;
var END;


function preload() {
  BackgroundImage = loadImage("Background.jpg");
  nutsImage = loadImage("nuts.png");
  moreNutsImage = loadImage("moreNuts.png");
  player1Image = loadImage("player.png");
  winnerPlayer1Img = loadImage("winnerPlayer.png");
  obstacleImg = loadImage("obstacle.png");
}


function setup() {
  createCanvas(800, 800);

  background = createSprite(400, 400, 800, 800);
  background.addImage(BackgroundImage);
  background.scale = 2;
  background.velocityY = 4;

  player = createSprite(400, 700, 20, 10);
  player.addImage(player1Image);
  player.scale = 0.2;

  Nuts = new Group;
  Obstacle = new Group;

  score = 0;

}

function draw() {

    createEdgeSprites();
    createNuts();
    createObstacle();
    createbackground();

  if (gameState === "PLAY"){

  if (keyDown("UP_ARROW")) {
    
    player.velocityX= 0;
    player.velocityY= -4;
    
    }
    
    if (keyDown("RIGHT_ARROW")) {
      
      player.velocityX= 4;
      player.velocityY= 0;
      
    }
    
  if (keyDown("LEFT_ARROW")) {
    
    player.velocityX= -4;
    player.velocityY= 0;
    
  }

  if(Obstacle.isTouching(player)) {
    player.velocityX = 0;
    player.velocityY = 0;
  
    }

    if (Nuts.isTouching(player)) {
      Nuts.destroyEach(); 
      score = score + 1;
      }
    
   
  function createbackground() {
       EdgeSprites();
    if (background.y > 600) {
      background.y = height/2;
        
    }
  }

  function createNuts() {
    if (World.frameCount % 100 == 0) {
      var nuts = createSprite(Math.round(random(100, 1200), 50, 80, 10));
      nuts.addImage(nutsImage);
      nuts.scale = 0.2;
      nuts.velocityY = 6;
      Nuts.add(nuts);
    }
  }

  function createObstacle() {
    if (World.frameCount % 100 == 0) {
      var rock = createSprite(Math.round(random(80, 1000), 40, 10, 10));
      rock.addImage(obstacleImg);
      rock.scale = 0.4;
      rock.velocityY = 8;
      Obstacle.add(rock);
    }
  }

  //function createmoreNuts() {
    //if (World.frameCount % 100 == 0) {
      //var winner = createSprite(Math.round(random(10, 1050), 40, 10, 10));
      //winner.addImage(moreNutsImage);
      //winner.scale = 0.2;
      //winner.velocityY = 2;
      //winner.lifetime = 50;
      //moreNuts.add(winner);
    //}
  //}
    
  drawSprites();
  
  fill(0);
  textSize(27);
  text("score: "+ score, 100,70);
}
  
}



//have to create remember it
// 1) increase player velocity of the character at 5 score
// 2) more obstacles in more amount
// 3) to create the login form
