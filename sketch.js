var bgImg;
var catImg1,catImg2;
var mouseImg1,mouseImg2;
var cat,mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,700);
    cat.addAnimation("cat1",catImg1);
    cat.addAnimation("cat2",catImg2);
    cat.addAnimation("cat3",catImg3)
    cat.scale=0.1;

    mouse = createSprite(200,700);
    mouse.addAnimation("mouse1",mouseImg1);
    mouse.addAnimation("mouse2",mouseImg2);
    mouse.addAnimation("mouse3",mouseImg3);
    mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)) {

        cat.changeAnimation("cat3",catImg3);
        mouse.changeAnimation("mouse3",mouseImg3);
        cat.velocityX=0;
        
    }

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
        if(keyDown("left_arrow")) {

         mouse.changeAnimation("mouse2",mouseImg2);
         cat.changeAnimation("cat2",catImg3);
         cat.velocityX=-5;
         
        }

}