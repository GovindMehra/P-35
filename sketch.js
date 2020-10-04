var dog, database, foodS, foodStock,canvas;

function preload()
{
	dog = loadImage("images/dogImg.png");
}

function setup() {
  canvas = createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog.x=200;
  dog.y=200;
  dog.scale=2;
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog = loadImage("images/dogImg1.png");
}
  drawSprites();
textSize(30);
fill("red");
stroke(30);
text("Note: Press Up Arrow to feed dog",30,100);
}

function readStock(data){
  foodS=data.val();
  }
  function writeStock(x){database.ref('Food').update({
      Food:x
  })
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
  }

