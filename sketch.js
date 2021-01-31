var Box;
var GreenBox;
var BlueBox;
var RedBox;
var OrangeBox;
var music;

function preload()
{
music = loadSound("music.mp3");

}

function setup()
{
createCanvas(800,500)

Box = createSprite(random(20,750),100,20,20);
Box.shapeColor = "white";
Box.velocityY = 3;
Box.velocityX = 3;

GreenBox = createSprite(700,450,160,20);
RedBox = createSprite(500,450,160,20);
OrangeBox = createSprite(300,450,160,20);
BlueBox = createSprite(100,450,160,20);

GreenBox.shapeColor = "Green";
BlueBox.shapeColor = "Blue";
OrangeBox.shapeColor = "Orange";
RedBox.shapeColor = "Red";

edges = createEdgeSprites()


}


function draw()
{
background("grey")
 
Box.bounceOff(edges);








if(GreenBox.isTouching(Box) && Box.bounceOff(GreenBox))
 {
    Box.shapeColor = "Green";
 }

 if(RedBox.isTouching(Box) && Box.bounceOff(RedBox))
 {
    Box.shapeColor = "Red";
 }

 if(OrangeBox.isTouching(Box) && Box.bounceOff(OrangeBox))
 {
    Box.shapeColor = "orange";
    Box.velocityX = 0;
    Box.velocityY = 0;
    music.stop();
 }

 if(BlueBox.isTouching(Box) && Box.bounceOff(BlueBox))
 {
    Box.shapeColor = "Blue";
    music.play();
 }





drawSprites();

}

