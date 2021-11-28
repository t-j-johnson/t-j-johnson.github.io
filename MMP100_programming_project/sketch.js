/*these are all of the declared variables and pages that I have defined throughout the program, each one having a different value/effect*/ 
var hiBob;
var click1;
var click2;
var click3;
var click4;
var click5;
var click6;
var click7;
var click8;
var click9;
var bobX;
var bobY;
var diam1;

let pageNum = 1;
let numPages = 11; 

/*page setup, initializes all of the variables*/
function setup() {
  createCanvas(400, 400);
  console.log(pageNum);
  hiBob = "Oh hello Jesse, nice day isn't it?";
  click1 = "Hey! What was that for?!";
  click2 = "Dude stop, that hurts!";
  click3 = "AHHHHHH";
  click4 = "You know what, fine! Do it again!";
  click5= "One more.";
  click6 = "Welcome to my domain, Jesse...";
  click7 = "There is no escape from here...";
  click8 = "Prepare for requiem...";
  click9 = "I AM GOD";
  bobX = (200,0);
  bobY = (0,200);
  diam1 = 20;

}

/*beginning of page sequence, runs through each page, starting with a greeting from bob, our circle character*/
function draw() {
  
  if (pageNum ==1){
    background(220);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (200,200, 50, 50);
    textSize(12);
  
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize(12);
    text (hiBob,190,150);}
  /*inverts bob's colors and makes the text a bit bigger and more centered, indicating annoyance*/
  else if (pageNum == 2){
    background(220);
    fill (0,180,150);
    stroke(255,0,0);
    strokeWeight (4);
    ellipse (200,200, 50, 50);
    
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize (18);
    text (click1,120,150);
  }
  /*causes bob and text to begin to shake around, showing that clicks cause pain or suffering*/
  else if (pageNum == 3){
    background(220,220,220,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    translate(random(-1,1), random(-1,1))
    ellipse (200,200, 55, 55);
    
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize (24);
    text (click2,95,150);
  }
  /*causes bob's fill and stroke to change at random, as well as his overall position on the page as he screams in pain*/
  else if (pageNum == 4){
    background(220,220,220,50);
    fill (random(0,255),random(0,255),random(0,255));
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight (4);
    translate(random(-400,400), random(-400,400))
    ellipse (200,200, 55, 55);
    
    
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize (24);
    translate(random(-5,5), random(-5,5));
    text (click3,150,150);
    
  }
 /*brings bob back to center position , puts text centered below him, as he challenges you*/ 
  else if (pageNum == 5){
    background(220);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (200,200, 50, 50);
  
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize(24);
    text (click4,40,260);
  }
  /*bob asks once more*/
  else if (pageNum == 6){
    background(220);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (200,200, 50, 50);
  
    fill(0);
    stroke (200);
    strokeWeight (2);
    textSize(24);
    text (click5,150,260);
  }
  /*changes the background to black, and changes opacity so that bob leaves trails and follows the mouse movement, while stroke of text changes values, we are in bob's world now*/
  else if (pageNum == 7){
    background(0,0,0,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (mouseX,mouseY, 50, 50);
  
    fill(0);
    stroke (random(100,255));
    strokeWeight (2);
    textSize(24);
    text (click6,20,260);
    }
  /*same trails and following of mouse, but now text randomly changes in shades of red, as we lose hope for survival, our hubris has brought us here*/
  else if (pageNum == 8){
    background(0,0,0,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (mouseX,mouseY, 50, 50);
  
    fill(random(0,255),0,0);
    stroke (random(100,255));
    strokeWeight (2);
    textSize(24);
    text (click7,30,260);
      }
  /*bob oscillates with random width and height and jiggles around while also following the mouse still, text jiggles around and changes colors widly*/
  else if (pageNum == 9){
    background(0,0,0,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (mouseX,mouseY, random(0,150),random(0,150));
  
    fill(255);
    stroke (random(100,255),random(0,255), random(0,255));
    strokeWeight (2);
    textSize(24);
    translate(random(-20,20),random(-20,20));
    text (click8,85,260);
      }
  /* text position is randomized, still flashes colors, as we learn that there is no escape from bob at this point*/
  else if (pageNum == 10){
    background(0,0,0,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    translate(random(-50,50),random(-50,50));
    ellipse (mouseX,mouseY, random(0,150),random(0,150));
  
    fill(255);
    stroke (random(100,255),random(0,255), random(0,255));
    strokeWeight (2);
    textSize(24);
    translate(random(-400,400),random(-400,400));
    text (click9,85,260);
      }
  /*bob reverts back to his position, but within this realm, and slowly encircles everything, we are bob, bob is everything now*/
  else if (pageNum == 11,diam1>=0){
    background(0,0,0,50);
    fill (255,0,0);
    stroke(0,180,150);
    strokeWeight (4);
    ellipse (200,200,diam1,diam1);
    diam1 = diam1 + 5;
      }
}
  /*causes the pages to change per mouse click*/
function mousePressed(){
  if (pageNum < numPages){
    pageNum++;
  }
  
  else{
    pageNum = 1;
  }


console.log(pageNum);
}