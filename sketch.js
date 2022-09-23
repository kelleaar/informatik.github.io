let zBereich;
let version = 1;




function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); //Links oben
  zBereich.style('z-index','-1') //Verschiebung auf der z-Achse
}

function draw() {
  //ohne background = transparent
  noStroke;
  text("Text:" + mouseX + mouseY, 50,70)
  if(version==1) {
  fill(mouseX/windowWidth*255,mouseY/windowWidth*255,50);
  circle(mouseX, mouseY, 20);
  }
  if(version==2) {
    if(mouseX >= windowWidth/2) {
      fill(255,0,0);
      circle(mouseX, mouseY, 20);
    } else{
      fill(0,0,255);
    circle(mouseX, mouseY, 20);
    }
  }
}
