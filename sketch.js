var balloon,balloonImage1,balloonImage2;
var dataBase,position;
// create database and position variable here


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  var BallPosition=dataBase.ref('balloon/position')
    balloonPosition.on("value",readPosition,showError)

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-1,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,-1);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,-1);
    balloon.scale=0.3
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,+1);
    bolloon.scale=0.2
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosition(x,y){
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;
}

function readPosition (data) {
  position =data.val()
  console.log(position.x)
  balloon.x=position.x;
  balloon.y=position.y; 
}

function showError () {
 console.log("dataNotFound")

}

function writePosition (x,y) {
  dataBase.ref('balloon/position').set({
      'x':position.x+x,
      'y':position.y+y
  })
}
