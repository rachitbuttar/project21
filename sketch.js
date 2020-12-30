var fixedrect,movingrect;
var obg1,obg2,obg3;
function setup() {
  createCanvas(800,800);
 fixedrect= createSprite(400, 200, 80, 50);
 movingrect=createSprite(200,200,50,80);
fixedrect.shapeColor="green";
movingrect.shapeColor="green";
obg1=createSprite(200,100,50,50);
obg1.shapeColor="green";
obg2=createSprite(200,200,50,50);
obg2.shapeColor="aqua";
obg3=createSprite(200,300,50,50);
obg3.shapeColor="gold";
 }

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
if(isTouching(movingrect,obg1)||isTouching(movingrect,obg2)||isTouching(movingrect,obg3)){
movingrect.shapeColor="blue"
fixedrect.shapeColor="blue"



}
else{
movingrect.shapeColor="green"
fixedrect.shapeColor="green"

}
drawSprites();
}
function isTouching(o1,o2) {
if(o1.x - o2.x <= o1.width/2 + o2.width/2 && 
  o2.x -o1.x <= o1.width/2 +o2.width/2&&
  o1.y - o2.y <=o1.height/2 + o2.height/2 && 
  o2.y - o1.y <=o1.height/2 +o2.height/2){
    return true
    
   }
  else{return false }

}