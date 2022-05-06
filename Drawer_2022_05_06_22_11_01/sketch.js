//author:
//2nd week tech demo
//instruction to interact - 
//when the mouse move to the left - rotate counterclockwise
// when the mouse move to the right - rotate closewise

//setup is to initiate the whole program
//it only run once
function setup() {
  createCanvas(500,500);
  background ('black');
}

//draw loops forever
function draw() {
  
  //a customized shape for mouse
 noCursor();
noStroke()
fill('white')
  circle(mouseX,mouseY,5)


}